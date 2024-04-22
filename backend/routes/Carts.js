const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart'); // Assuming your Cart model is in a "models" directory

// Get all carts
router.get('/carts', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific cart by ID
router.get('/carts/:id', async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Add an item to the cart
router.post('/carts/add', async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.json(savedPlant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a specific cart by ID
router.delete('/carts/:id', async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndRemove(req.params.id);
        
        if (!deletedCart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        res.json(deletedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



module.exports = router;
