const User = require('./users/User');

const API_Error = require('./ApiError');

function hasPermission(permission) {
  return this.permissions.includes(permission);
}

const hasPerms = function(...perms) {
  if (!Array.isArray(perms)) throw new Error("Permissions must be an array.");
  return async function(req, res, next) {
    try {
      if (req.user && '_id' in req.user) {
        const user = await User.findById(req.user._id).exec();

        if (!user) throw API_Error('PERMISSION_ERROR', 'User requesting specified resource cannot be found.');

        const { permissions } = user;
        if (!permissions || !permissions.some(permission => perms.includes(permission))) throw API_Error('PERMISSION_ERROR', 'User does not have permission for requested API endpoint.', 403);
        else {
          req.user.permissions = permissions;
          req.user.can = hasPermission.bind(req.user);
          next();
        }
      } else {
        throw API_Error('PERMISSION_ERROR', 'User is not logged in.');
      }
    } catch (error) {
      next(error);
    }
  };
};

module.exports = hasPerms;
