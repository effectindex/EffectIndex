const slug = require('mongoose-slug-generator');

const mongoose = require('mongoose');
mongoose.plugin(slug);

const User = mongoose.model('User', {
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'artist', 'user']
    }
})

module.exports = User;