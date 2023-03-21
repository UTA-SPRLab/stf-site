const express = require('express');
const userModel = require('../../controllers/users.js');
const adminModel = require('../../controllers/admin.js');
const { authenticateWithClaims } = require("../../middleware/auth");

const router = express.Router();

// get full information about admin user
router.get('/', authenticateWithClaims(2),
    async (req, res, next) => {
        try {
            const result = await userModel.find({ email: req.user.email });
            res.status(200).json(result[0]);
        } catch (err) {
            console.error('Failed to get user info:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// get permission of admin user
router.get('/permission', authenticateWithClaims(2),
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

// lookup full information about any user
router.get('/lookup', authenticateWithClaims(2),
    async (req, res, next) => {
        try {
            let email = req.query.email ? req.query.email : "";
            const result = await adminModel.lookupUser(email);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to lookup user:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// promote, demote, or remove user
router.patch('/promote', authenticateWithClaims(2),
    async (req, res, next) => {
        try {
            const result = await adminModel.promoteUser(req.body.email);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to promote/demote/remove user:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// promote, demote, or remove user
router.patch('/demote', authenticateWithClaims(2),
    async (req, res, next) => {
        try {
            const result = await adminModel.demoteUser(req.body.email);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to promote/demote/remove user:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// promote, demote, or remove user
router.delete('/', authenticateWithClaims(2),
    async (req, res, next) => {
        try {
            const result = await adminModel.removeUser(req.body.email);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to promote/demote/remove user:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

module.exports = router;