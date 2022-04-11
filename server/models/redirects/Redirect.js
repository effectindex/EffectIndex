const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Redirect = mongoose.model("Redirect", {
  from: String,
  to: String,
});

module.exports = Redirect;
