const hasRole = function(roles) {
  if (!Array.isArray(roles)) throw new Error("Roles must be an array.");

  return function(req, res, next) {
    if (("user" in req && "scope" in req.user) && roles.some(role => req.user.scope[role] === true)) {
      next();
    } else {
      res.sendStatus(401);
    } 
  };
};

module.exports = hasRole;
