const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const article = new Schema({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    publication_status: {
      type: String,
      enum: ['published', 'unpublished', 'draft', 'unlisted'],
      required: true
    },
    publication_date: {
      type: Date
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    created: {
      type: Date,
      default: Date.now
    },
    authors: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Person'
    }],
    citations: {
      type: Array
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
    },
    slug: {
      type: String
    }
  }
);

const Article = mongoose.model("Article", article);

module.exports = Article;
