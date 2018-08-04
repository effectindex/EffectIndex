const slug = require("mongoose-slug-generator", {
  truncate: 35
});

const mongoose = require("mongoose");
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  title: {
    type: String
  },
  form_link: String,
  slug: { type: String, slug: ["title"], unqiue: true },
  subject: {
    name: String,
    trip_date: String,
    age: String,
    setting: String,
    gender: String,
    height: String,
    weight: String,
    medications: String,
    pdf_url: String,
  },
  substances: [{
    name: String,
    dose: String,
    roa: String
  }],
  introduction: String,
  description: String,
  onset: [{
    time: String,
    description: String,
  }],
  peak: [{
    time: String,
    description: String,
  }],
  offset: [{
    time: String,
    description: String,
  }],
  conclusion: String,
  tags: [String],
  sectionVisibility: Object
}, 
  {minimize: false}
);

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
