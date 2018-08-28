const slugs = require("mongoose-url-slugs");

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  title: {
    type: String,
    index: true
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
