const mongoose = require('mongoose');

const UsageLogSchema = new mongoose.Schema({
    apiEndpoint: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    requestMethod: {
        type: String,
        required: true,
    },
    responseStatus: {
        type: Number,
        required: true,
    },
});

const UsageLog = mongoose.model('UsageLog', UsageLogSchema);

module.exports = UsageLog;
