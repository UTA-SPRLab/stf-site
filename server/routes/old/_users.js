const express = require('express');
const userModel = require('../controllers/users.js');
const { authenticateWithClaims } = require("../middleware/auth");

const router = express.Router();

// gets filtered user information (email, permission)
router.get('/', authenticateWithClaims(0),
    async (req, res, next) => {
        try {
            const result = await userModel.findFiltered({ email: req.user.email });
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to get user info:', err);
            res.status(500).json({ message: "Failed to get user information" });
        }
        next();
    }
);

// get permission
router.get('/permission', authenticateWithClaims(0),
    async (req, res, next) => {
        try {
            const result = await userModel.getPermission(req.user.email);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to get user permission:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

module.exports = router;