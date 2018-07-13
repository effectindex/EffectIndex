const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: {
    type: String,
    unique: true
  },
  hash: String,
  used_by: String,
  scope: {
    type: Object,
    default: {
      admin: false,
      editor: false
    }
  }
});

module.exports = User;
