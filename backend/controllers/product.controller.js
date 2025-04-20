import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts  = async(req, res)=>{
    try{
        const products = await Product.find({}); //passing empty object to find all
        res.status(200).json({success: true, data: products});
    }catch(error){
        console.log("error in fetching products"); //just for debugging purposes
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const createProduct = async (req, res)=>{
    //we're making this function async cuz we wanna use the 'with' keyword
    const product = req.body; //user will send this data

    if(!product.name || !product.image || !product.price){
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create Product: ", error.message);
        res.status(500).json({success: false, message: "Server Error"}); //we're using 500 status cuz this is an internal server error
    }
};

export const updateProduct = async(req, res)=>{
    const {id} = req.params; 

    const product = req.body; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Product not found"});
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success: true, data: updatedProduct});
    }catch(error){
        console.log("error in updating product");
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct = async(req, res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Product not found"});
    }

    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }catch(error){
        console.log("error in deleting product:", error.message);
        res.status(500).json({success: false, message: "Server Error"}); 
    }
};