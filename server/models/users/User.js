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
  }
});

UserSchema.virtual('permissions').get(function() {
  const { roles } = this;

  const permissions = new Set();

  if (roles.includes('admin')) permissions.add('admin');
  
  if (roles.includes('editor') || roles.includes('admin')) {
    permissions.add('all-effects');
    permissions.add('all-replications');
    permissions.add('all-reports');
    permissions.add('all-articles');
  }

  if (roles.includes('replications-moderator')) permissions.add('all-replications');
  else if (roles.includes('replications')) permissions.add('own-replications');
  
  if (roles.includes('articles-moderator')) permissions.add('all-articles');
  else if (roles.includes('articles')) permissions.add('own-articles');

  if (roles.includes('effects-moderator')) permissions.add('all-effects');
  else if (roles.includes('effects')) permissions.add('own-effects');

  if (roles.includes('reports-moderator')) permissions.add('all-reports');
  else if (roles.includes('reports')) permissions.add('own-reports');

  return [...permissions];

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
