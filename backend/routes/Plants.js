const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant'); // Assuming your Plant model is in a "models" directory

// Get all plants
router.get('/plants', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific plant by ID
router.get('/plants/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a new plant
router.post('/plants', async (req, res) => {
    const newPlant = new Plant(req.body);
    try {
        const savedPlant = await newPlant.save();
        res.json(savedPlant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
