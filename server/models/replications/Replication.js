const mongoose = require('mongoose'),
      slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
var Schema = mongoose.Schema;

const Replication = mongoose.model('Replication', {
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        unique: true,
        slug: ['title']
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
    associated_effects: [{
        type: Schema.Types.ObjectId,
        ref: 'Effect'
    }]
});

module.exports = Replication;