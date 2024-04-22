const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
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
    }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
