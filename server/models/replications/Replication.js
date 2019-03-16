const mongoose = require("mongoose");
const slugs = require("mongoose-url-slugs");

const Schema = mongoose.Schema;

const replicationSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
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

replicationSchema.plugin(slugs('title', {
  update: true,
  alwaysRecreate: true,
  field: 'url'
}));

const Replication = mongoose.model("Replication", replicationSchema);

module.exports = Replication;
