const mongoose = require("mongoose");
const slugs = require("mongoose-url-slugs");

const Schema = mongoose.Schema;

const article = new Schema({
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['viscidcode', 'html', 'markdown'],
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
    updated: {
      type: Date
    },
    short_description: String,
    body: {
      viscidcode: {
        raw: {
          type: String
        },
        parsed: {
          type: Object
        }
      },
      html: {
        type: String
      },
      markdown: {
        type: String
      }
    },
    date: String,
    resource: {
      type: String,
      required: true
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
