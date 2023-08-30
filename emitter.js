const io = require('socket.io-client');
const crypto = require('crypto');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json'));

const EMISSION_INTERVAL = 10000; // 10 seconds
const MIN_MESSAGES = 49;
const MAX_MESSAGES = 499;

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateEncryptedMessage() {
    const messageCount = Math.floor(Math.random() * (MAX_MESSAGES - MIN_MESSAGES + 1)) + MIN_MESSAGES;

    const encryptedMessages = [];

    for (let i = 0; i < messageCount; i++) {
        const name = data.names[getRandomIndex(data.names)];
        const origin = data.origins[getRandomIndex(data.origins)];
        const destination = data.destinations[getRandomIndex(data.destinations)];
        const originalMessage = { name, origin, destination };

        const secret_key = crypto.createHash('sha256').update(JSON.stringify(originalMessage)).digest('hex');
        const sumCheckMessage = { ...originalMessage, secret_key };

        const passKey = crypto.randomBytes(32); // Replace with your actual encryption key
        const cipher = crypto.createCipheriv('aes-256-ctr', passKey, crypto.randomBytes(16));
        const encryptedMessage = cipher.update(JSON.stringify(sumCheckMessage), 'utf-8', 'hex') + cipher.final('hex');

        encryptedMessages.push(encryptedMessage);
    }

    return encryptedMessages.join('|');
}

// const client = new net.Socket();
// client.connect(3000, 'localhost', () => {
//     console.log('Connected to listener service');
//     setInterval(() => {
//         const encryptedMessageStream = generateEncryptedMessage();
//         client.write(encryptedMessageStream);
//         console.log('Sent encrypted message stream');
//     }, EMISSION_INTERVAL);
// });

// client.on('close', () => {
//     console.log('Connection closed');
// });
// client.on('error', (err) => {
//     console.error('Error:', err);
// });

const socket = io('http://localhost:3000'); // Connect to the listener's server

socket.on('connect', () => {
    console.log('Connected to listener service');
    setInterval(() => {
        const encryptedMessageStream = generateEncryptedMessage();
        socket.emit('encryptedMessage', encryptedMessageStream); // Emit the encrypted message stream
        console.log('Sent encrypted message stream');
    }, EMISSION_INTERVAL);
});

socket.on('disconnect', () => {
    console.log('Connection closed');
});