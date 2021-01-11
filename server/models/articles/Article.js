const mongoose = require("mongoose");
const slugs = require("mongoose-url-slugs");

const Schema = mongoose.Schema;

const article = new Schema({
    title: {
      type: String,
      required: true
    },
    publication_status: {
      type: String,
      enum: ['published', 'unpublished', 'draft'],
      required: true
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    created: {
      type: Date,
      default: Date.now
    },
    author: {
      
    },
    updated: {
      type: Date
    },
    short_description: String,
    social_media_image: String,
    tags: [String],
    body: {
      raw: {
        type: String,
        required: true
      },
      parsed: {
        type: Array,
        required: true
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  }
);

article.plugin(slugs('title', {
  update: true,
  alwaysRecreate: true,
  field: 'slug'
}));

const Article = mongoose.model("Article", article);

module.exports = Article;
