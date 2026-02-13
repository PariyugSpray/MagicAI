const mongoose = require('mongoose');

const connectionString = 'mongodb://username:password@localhost:27017/mydatabase'; // Update with your MongoDB connection string

const connect = async () => {
    try {
        await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connect;
