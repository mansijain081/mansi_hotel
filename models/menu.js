const mongoose = require('mongoose');   
const menuitemSchema = new mongoose.Schema({
    name: { type: String, required: true },     
    price: { type: Number, required: true },
    taste: { type: String, enum: ['spicy', 'sweet', 'sour'], required: true },
    is_drink: { type: Boolean, default: false },
    is_veg: { type: Boolean, default: true },
    is_available: { type: Boolean, default: true },
    ingridients: { type: [String], required: true, default: [] },
    num_of_sales: { type: Number, default: 0 },
})

const MenuItem = mongoose.model('MenuItem', menuitemSchema);
module.exports = MenuItem;

