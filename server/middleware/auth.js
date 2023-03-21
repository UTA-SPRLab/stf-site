const jwt = require("jsonwebtoken");
const path = require('path');
const env = require('dotenv').config({ path: path.resolve(__dirname, '../.env') }).parsed

const accessTokenSecret = env.ACCESSTOKENSECRET

// authenticates users with an permission claim
const authenticateWithClaims = (claims) => (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No header present" });
    }

    if (authHeader.split(" ")[0] != "Bearer") {
        return res.status(401).json({ message: "Authorization header not using Bearer Schema. Use: `Bearer <token>`" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid authentication token" });
        }

        if (user.permission >= claims) {
            req.user = user;
            return next();
        }

        return res.status(403).json({ message: `Invalid permission.` });
    });
}

// used only in ratelimits.js
const getUserAuth = (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        // return res.status(401).json({ message: "No header present" });
        return;
    }

    if (authHeader.split(" ")[0] != "Bearer") {
        return res.status(401).json({ message: "Authorization header not using Bearer Schema. Use: `Bearer <token>`" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid authentication token" });
        }

        if (user.permission >= 0) {
            req.user = user;
        } else {
            return res.status(403).json({ message: `Invalid permission.` });
        }
    });
}

module.exports = { authenticateWithClaims, getUserAuth };