const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  hash: String,
  roles: {
    type: Array,
    default: []
  },
  identity: {
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

UserSchema.virtual('permissions').get(function() {
  const { roles } = this;

  const permissions = new Set();

  permissions.add('own-person');

  if (roles.includes('admin')) {
    permissions.add('admin');
    permissions.add('all-people');
    permissions.add('all-people');
  }
  
  if (roles.includes('editor') || roles.includes('admin')) {
    permissions.add('admin-effects');
    permissions.add('all-replications');
    permissions.add('all-reports');
    permissions.add('all-articles');
    permissions.add('manage-blog');
  }

  if (roles.includes('replications-moderator')) permissions.add('all-replications');
  else if (roles.includes('replications')) permissions.add('own-replications');
  
  if (roles.includes('articles-moderator')) permissions.add('all-articles');
  else if (roles.includes('articles')) permissions.add('own-articles');

  if (roles.includes('effects-moderator')) permissions.add('admin-effects');
  else if (roles.includes('effects')) permissions.add('edit-effects');

  if (roles.includes('reports-moderator')) permissions.add('all-reports');
  else if (roles.includes('reports')) permissions.add('own-reports');

  return [...permissions];

});

// UserSchema.virtual('identity', {
//   ref: 'Person',
//   localField: '_id',
//   foreignField: 'user',
//   justOne: true
// });

const User = mongoose.model("User", UserSchema);

module.exports = User;
