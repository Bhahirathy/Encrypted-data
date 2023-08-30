const app = require('http').createServer();
const io = require('socket.io')(app);
const crypto = require('crypto');
const mongoose = require('mongoose');
const fs = require('fs');

// Define your MongoDB connection URL
const MONGODB_URI = 'mongodb://localhost:27017/timeseriesdb';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const TimeSeriesSchema = new Schema({
    timestamp: { type: Date, required: true },
    name: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
});

const TimeSeriesModel = mongoose.model('TimeSeries', TimeSeriesSchema);

let totalMessages = 0;
let successfulMessages = 0;
app.listen(3000, () => {
    console.log('Listener service listening on port 3000');
});

io.on('connection', (socket) => {
    console.log('Emitter connected');

    socket.on('data', encryptedData => {
        console.log('Received encrypted data:', encryptedData.toString());
        const passKey = crypto.randomBytes(32); // Replace with your actual decryption key
        const decipher = crypto.createDecipheriv('aes-256-ctr', passKey, crypto.randomBytes(16));
        const decryptedData = decipher.update(encryptedData.toString(), 'hex', 'utf-8') + decipher.final('utf-8');

        const messages = decryptedData.split('|');

        for (const message of messages) {
            try {
                console.log('Received message:', message);
                const decryptedMessage = JSON.parse(message);
                const { name, origin, destination, secret_key } = decryptedMessage;

                const calculatedKey = crypto.createHash('sha256').update(JSON.stringify({ name, origin, destination })).digest('hex');

                if (calculatedKey !== secret_key) {
                    console.log('Data integrity compromised, discarding message');
                    continue;
                }

                const timestamp = new Date();
                const timeSeriesData = new TimeSeriesModel({
                    timestamp,
                    name,
                    origin,
                    destination,
                });

                timeSeriesData.save((error, savedData) => {
                    if (error) {
                        console.error('Error saving time series data:', error);
                    } else {
                        console.log('Saved time series data:', savedData);
                        successfulMessages++;
                    }
                    totalMessages++;
                    const successRate = (successfulMessages / totalMessages) * 100;
                    console.log('Success rate:', successRate);
                    socket.emit('successRate', successRate);

                });
            } catch (error) {
                console.error('Error processing message:', error);
            }
        }
    });

    socket.on('disconnect', () => {
        console.log('Emitter disconnected');
    });
});



// socket.on('error', (err) => {
//     console.error('Server error:', err);
// });
