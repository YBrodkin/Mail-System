const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    to: {
        type: [String],
        required: true
    },
    from: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    subject: String
})

const messageModel = mongoose.model('message', messageSchema) // יצירת טבלה לפי חוקי הסכמה

module.exports = messageModel
