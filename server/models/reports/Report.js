const slug = require("mongoose-slug-generator", {
  truncate: 35
});

const mongoose = require("mongoose");
mongoose.plugin(slug);


const Report = mongoose.model("Report", {
  title: {
    type: String,
    required: true
  },
  slug: { type: String, slug: ["title"], unqiue: true },
  description: String,
  form_link: String,
  trip_date: Date,
  submit_date: Date,
  author: String,
  tags: [String]
});

module.exports = Report;
