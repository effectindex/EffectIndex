const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
    username: {
        type: String,
        required: true,
        unique: true
    },
    profileImage: String,
    body: String
})

module.exports = Profile;