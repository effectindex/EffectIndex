const mongoose = require("mongoose");
const Vcode = require('../Vcode');

const effectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    set: function(name) {
      return name.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
    }
  },
  tags: [String],
  toc: {
    type: Array,
    default: []
  },
  description: Vcode,
  gallery_order: {
    type: Array,
    default: []
  },
  summary_raw: String,
  long_summary: Vcode,
  analysis: Vcode,
  style_variations: Vcode,
  personal_commentary: Vcode,
  contributors: Array,
  citations: Array,
  related_substances: Array,
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
