const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/JWT-auth",{
    serverSelectionTimeoutMS: 5000,
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
})

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
})

module.exports = mongoose
