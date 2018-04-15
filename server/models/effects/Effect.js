const config = require('../../../nuxt.config.js');

const mongoose = require('mongoose');
mongoose.connect(config.server.mongooseUri);

const Effect = mongoose.model('Effect', {
    name: {
        type: String,
        required: true
    },
    class: String,
    subclass: String,
    action: String,
    substance_class: String,
    description_textonly: String,
    description_formatted: String,
    replications: Array,
    related_substances: Array,
    see_also: Array,
    external_links: Array,
    citations: Array
});

module.exports = Effect;