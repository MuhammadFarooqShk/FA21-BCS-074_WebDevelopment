const mongoose = require('mongoose');

const newproductSchema = new mongoose.Schema({
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
category: {
type: String,
required: true
},
isFeatured: {
type: Boolean,
default: false
}
});

const NewProduct = mongoose.model('NewProduct', newproductSchema);
module.exports = NewProduct;