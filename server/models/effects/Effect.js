const mongoose = require('mongoose');

const Effect = mongoose.model('Effect', {
    name: {
        type: String,
        required: true
    },
    url: String,
    tags: Array,
    description_raw: String,
    description_formatted: String,
    gallery_order: {
        type: Array,
        default: []
    },
    summary_raw: String,
    summary_formatted: String,
    analysis_raw: String,
    analysis_formatted: String,
    citations: Array,
    related_substances: Array,
    see_also: Array,
    external_links: Array
});

module.exports = Effect;