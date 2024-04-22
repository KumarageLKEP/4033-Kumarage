const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number, // Add the quantity property
        required: true // You can adjust the required constraint as needed
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
