const config = require('../../../nuxt.config.js');
const slug = require('mongoose-slug-generator');

const mongoose = require('mongoose');
mongoose.plugin(slug);
mongoose.connect(config.server.mongooseUri);


const Post = mongoose.model('Post', {
    slug: { type: String, slug: ['title', 'body'], unqiue: true},
    author: String,
    title: String,
    datetime: Date,
    body: String
})

module.exports = Post;