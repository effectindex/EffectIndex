const User = require('./users/User');

const hasRole = function(roles) {
  if (!Array.isArray(roles)) throw new Error("Roles must be an array.");
  return async function(req, res, next) {
    if (req.user && '_id' in req.user) {
      const { _id } = req.user;
      const user = await User.findById(_id).exec();
      roles.some(role => user.roles.includes(role)) ? next() : res.sendStatus(401);
    }
  };
};

module.exports = hasRole;
