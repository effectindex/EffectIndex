const slugs = require("mongoose-url-slugs");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: String,
  title: String,
  datetime: Date,
  body: String
});

postSchema.plugin(slugs('title', {
  update: true,
  alwaysRecreate: true
}));

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
