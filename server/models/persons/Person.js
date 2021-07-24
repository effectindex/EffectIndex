const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vcode = require('../Vcode');

const socialMedia = new Schema({
  value: String,
  type: {
    type: String,
    enum: ['personal', 'facebook', 'instagram', 'tiktok', 'reddit', 'discord', 'twitter', 'youtube'],
    default: 'personal'
  }
});

const Person = mongoose.model("Person", {
  full_name: String,
  alias: String,
  email: String,
  role: String,
  gravatar_hash: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  social_media: {
    type: [socialMedia]
  },
  bio: Vcode,
  tags: {
    type: [String],
  },
  profile_image: String,
  profile_url: {
    type: String,
    set: function(name) {
      return name.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
    }
  },
  featured: Boolean,
  isPrivate: Boolean
});


module.exports = Person;
