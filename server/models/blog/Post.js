const mongoose = require("mongoose");

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const post = new Schema({
  author: String,
  title: String,
  datetime: Date,
  body: String,
  slug: {
    type: String,
    slug: 'title'
  }
});

const Post = mongoose.model("Post", post);

module.exports = Post;
