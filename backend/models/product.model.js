//the other convention used to name this file is Product.js

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    
    timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema); 
//tells to mongoose to create a collection called Product
//with the scema defined above
//mongoose is gonna convert it to 'products' (lowercase and plural)

export default Product; //to use this in different files