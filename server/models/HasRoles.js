const hasRole = function (roles) {
    if (!Array.isArray(roles)) throw new Error('Roles must be an array.');

    return function(req, res, next) {
        let hasAccess = false;

        if (('user' in req) && ('scope' in req.user)) {
            let scope = req.user.scope;
    
            roles.forEach( function(role) {
                if (scope[role] === true) hasAccess = true;
            });
        }

        (hasAccess ? next() : res.sendStatus(401));
    }
}

module.exports = hasRole;