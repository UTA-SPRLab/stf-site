const rateLimit = require('express-rate-limit')
const { getUserAuth } = require("../middleware/auth");
const config = require('../config.json');

// registration rate limiter
const registration = rateLimit(config.routes.session.endpoints.register.config);

// login rate limiter
const login = rateLimit(config.routes.session.endpoints.login.config);

// user request rate limiter
const user = rateLimit(config.routes.users.endpoints.users.config);

// permission checker (checks if a user is the minimum permission)
const isValidpermission = async (permission, claimedpermission) => {
    return permission >= claimedpermission;
}
// fetch from db rate limiter
const fetch = rateLimit({
    windowMs: config.routes.fetch.endpoints.fetch.config.windowMs, // 15 minutes
    max: async (req, res) => { // limit each IP to 10 requests per windowMs
        await getUserAuth(req, res);
        try {
            if (await isValidpermission(req.user.permission, config.routes.fetch.endpoints.fetch.config.max[2].permission)) { return config.routes.fetch.endpoints.fetch.config.max[2].limit; }
            else if (await isValidpermission(req.user.permission, config.routes.fetch.endpoints.fetch.config.max[1].permission)) { return config.routes.fetch.endpoints.fetch.config.max[1].limit; }
        } catch (e) {
            return config.routes.fetch.endpoints.fetch.config.max[0].limit;
        }
    },
    skip: async (req, res) => { // skip if permission is 2 or 3
        await getUserAuth(req, res);
        try {
            return isValidpermission(req.user.permission, config.routes.fetch.endpoints.fetch.config.skip.permission);
        } catch (e) {
            return false;
        }
    },
    message: config.routes.fetch.endpoints.fetch.config.message
});

module.exports = {
    registration,
    login,
    user,
    fetch
}