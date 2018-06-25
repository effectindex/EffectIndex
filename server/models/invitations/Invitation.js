const mongoose = require('mongoose');

const Invitation = mongoose.model('Invitation', {
    code: {
        type: String,
        unique: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    expires: Date,
    used: {
        type: Boolean,
        default: false,
    }
})

module.exports = Invitation;