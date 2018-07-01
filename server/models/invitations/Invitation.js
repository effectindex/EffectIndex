const mongoose = require('mongoose');

const Invitation = mongoose.model('Invitation', {
    created: {
        type: Date,
        default: Date.now,
    },
    expires: Date,
    used: {
        type: Boolean,
        default: false,
    },
    used_by: {
        type: String
    }
})

module.exports = Invitation;