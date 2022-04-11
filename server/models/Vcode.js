const mongoose = require("mongoose");
const parse = require('../../lib/vcode2/parse').default;


const vcodeSchema = new mongoose.Schema({
  raw: String,
  parsed: String,
  length: Number,
});

vcodeSchema.path('raw').set( function(vcode) {
  if (this instanceof mongoose.Document && vcode !== null) {
    this.length = vcode.length;
    this.parsed = JSON.stringify(parse(vcode));
  }
  return vcode;
});

module.exports = vcodeSchema;