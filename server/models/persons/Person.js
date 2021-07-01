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
  not_public: Boolean,
  full_name: String,
  alias: String,
  email: String,
  gravatar_hash: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  social_media: {
    type: [socialMedia]
  },
  bio: Vcode,
  tags: [String],
  image: String,
  image_cropped: String,
  featured: Boolean
});


module.exports = Person;
