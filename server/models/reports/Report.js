const slugs = require("mongoose-url-slugs");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  title: {
    type: String
  },
  form_link: String,
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
  sectionVisibility: Object,
  featured: {
    type: Boolean,
    default: false
  }
}, 
  {minimize: false}
);

reportSchema.plugin(slugs('title', {
  update: true,
  alwaysRecreate: true
}));

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
