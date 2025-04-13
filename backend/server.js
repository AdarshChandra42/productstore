//to import express 
//you can use 
//const express = req ('express');
//or 
import express from 'express'; //by adding "type": "module" in package.json
import dotenv from 'dotenv';  //to access env variables in .env
import {connectDB} from './config/db.js'; //to connect to MongoDB
import Product from "./models/product.model.js";

dotenv.config();
//The config() method is what actually:
//Reads your .env file
//Parses the key-value pairs in that file
//Adds those values to Node's process.env object, making them accessible throughout your application

const app = express(); 
//creates an instance of an Express application. 
//This instance, stored in the app variable, will be used to configure your server and define routes.

//we first define the routes and then start the server.

// app.get("/", (req, res)=>{
//     res.send("Server is ready");
// });
//req is request, res is response. 

app.use(express.json()); //this is a middleware that allows us to accept JSON data in the req.body
//middleware is just a function that runs before you response back to client  

app.post("/api/products", async (req, res)=>{
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
});  

app.delete("/api/products/:id", async(req, res)=>{
    const {id} = req.params;
    
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    }catch(error){
        res.status(404).json({success: false, message: "Product not found"}); 
    }
}); 
//:id means dynamic id

//for development, calling app.listen to start the server is a standard practice.
//binds the express application to specified port (5000) and starts listening for incoming HTTP requests.
//The connectDB() function is called to establish a connection to the MongoDB database before the server starts listening for requests.
//The callback function logs a message to the console indicating that the server has started successfully.

app.listen(5000, () => {
    connectDB();
    console.log("Server started at Localhost");
});

//This line does two important things:
//1. It starts a server that listens for HTTP requests on port 5000 (asynchronous)
//2. It executes the callback function once the server has started, which logs "Server started at Localhost" to the console




//using environment variables is important for reasons like security, separation of concerns, and deployment flexibility.
//It allows you to keep sensitive information out of your codebase, 
//making it easier to manage different configurations for different environments (development, testing, production) without changing the code itself.