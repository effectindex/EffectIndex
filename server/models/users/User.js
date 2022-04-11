const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  },
  title: {
    type: String,
    default: "User"
  },
  profile: {
    type: Schema.ObjectId,
    ref: 'Profile'
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
