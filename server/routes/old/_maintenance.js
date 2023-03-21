const express = require('express');
const maintenanceModel = require('../controllers/maintenance.js');
const { authenticateWithClaims } = require("../middleware/auth");

const router = express.Router();

// add item to 'data' table in database
router.post('/', authenticateWithClaims(3),
    async (req, res, next) => {
        try {
            const result = await maintenanceModel.add(req.body);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to add item:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// delete item from 'data' table in database
router.delete('/', authenticateWithClaims(3),
    async (req, res, next) => {
        try {
            const result = await maintenanceModel.delete(req.body);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to delete item:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

// update item from 'data' table in database
router.put('/', authenticateWithClaims(3),
    async (req, res, next) => {
        try {
            const result = await maintenanceModel.update(req.query,req.body);
            res.status(200).json({ message: result });
        } catch (err) {
            console.error('Failed to update item:', err);
            res.status(500).json({ message: err.toString() });
        }
        next();
    }
);

module.exports = router;