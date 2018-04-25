const slug = require('mongoose-slug-generator');

const mongoose = require('mongoose');
mongoose.plugin(slug);

const Post = mongoose.model('Post', {
    slug: { type: String, slug: ['title', 'body'], unqiue: true},
    author: String,
    title: String,
    datetime: Date,
    body: String
})

module.exports = Post;