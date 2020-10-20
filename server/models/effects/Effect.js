const mongoose = require("mongoose");

const effectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: String,
  tags: {
    type: [String]
  },
  description_raw: {
    type: String,
  },
  description_formatted: String,
  gallery_order: {
    type: Array,
    default: []
  },
  summary_raw: String,
  long_summary_raw: String,
  long_summary_formatted: String,
  analysis_raw: String,
  analysis_formatted: String,
  style_variations_raw: String,
  style_variations_formatted: String,
  personal_commentary_raw: String,
  personal_commentary_formatted: String,
  contributors: Array,
  citations: Array,
  related_substances: Array,
  related_reports: Array,
  see_also: Array,
  external_links: Array,
  social_media_image: String,
  featured: {
    type: Boolean,
    default: false
  },
  subarticles: Array
});

effectSchema.index({
  name: "text",
  tags: "text",
  summary_raw: "text"
});

const Effect = mongoose.model("Effect", effectSchema);

module.exports = Effect;
