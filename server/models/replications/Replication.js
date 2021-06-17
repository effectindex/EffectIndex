const mongoose = require("mongoose");

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const replicationSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      slug: ["title"],
      unique: true
    },
    type: {
      type: String,
      required: true
    },
    person: {
      type: Schema.Types.ObjectId,
      ref: "Person"
    },
    artist: String,
    artist_url: String,
    description: String,
    date: String,
    resource: {
      type: String,
      required: true
    },
    thumbnail: String,
    associated_effects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Effect"
      }
    ],
    associated_substances: [
      {
        type: Schema.Types.ObjectId,
        ref: "Substance"
      }
    ],
    featured: {
      type: Boolean,
      default: false
    }
  }
);

const Replication = mongoose.model("Replication", replicationSchema);

module.exports = Replication;
