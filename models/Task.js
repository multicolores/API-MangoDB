const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);