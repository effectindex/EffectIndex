const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        enum: ['admin', 'artist', 'editor', 'user']
    },
    firstName: String,
    lastName: String,
    url: String
})

module.exports = User;