const express = require('express');
const mongodb = require('mongoose')
const env = require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const mongoUrl = process.env.MONGO_DB
mongodb.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Server Connected to MongoDB')
}).catch((error) => {
    console.log('Error Connected to MongoDb', error)
})
app.get('/', (req, res) => {
    res.send('Hello World')
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});
