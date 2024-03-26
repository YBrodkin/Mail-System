const mongoose = require('mongoose')
require('./message.model')
require('./email.model')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false
    },
    avatar: String,

    emails: [{
        email: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'email'
        },
        isRead: {
            type: Boolean,
            default: false
        },
        isSent: Boolean,
        isRecieved: Boolean,
        isFavorite: Boolean,
        isDeleted: Boolean,
    }],

    isActive: {
        type: Boolean,
        default: true
    }
})

const userModel = mongoose.model('user', userSchema) // יצירת טבלה לפי חוקי הסכמה

module.exports = userModel
