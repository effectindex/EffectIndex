const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  hash: String,
  person: {
    type: Schema.Types.ObjectId,
    ref: 'Person'
  },
  roles: {
    type: Array,
    default: []
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
