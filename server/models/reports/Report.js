const mongoose = require("mongoose");

const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  title: {
    type: String,
    index: true
  },
  slug: {
    type: String,
    slug: "title"
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
    name: {
      type: String
    },
    dose: String,
    roa: String,
  }],
  introduction: {
    type: String
  },
  description: {
    type: String
  },
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
  conclusion: {
    type: String
  },
  tags: {
    type: [String]
  },
  related_effects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Effect'
  }],
  sectionVisibility: Object,
  featured: {
    type: Boolean,
    default: false
  }
}, 
  {minimize: false}
);

reportSchema.index({
  title: 'text',
  'subject.name': 'text',
  'substances.name': 'text',
  introduction: 'text',
  description: 'text',
  tags: 'text'
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
