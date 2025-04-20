//to import express 
//you can use 
//const express = req ('express');
//or 
import express from 'express'; //by adding "type": "module" in package.json
import dotenv from 'dotenv';  //to access env variables in .env
import {connectDB} from './config/db.js'; //to connect to MongoDB
import productRoutes from './routes/product.route.js';

dotenv.config();
//The config() method is what actually:
//Reads your .env file
//Parses the key-value pairs in that file
//Adds those values to Node's process.env object, making them accessible throughout your application

const PORT = process.env.PORT || 5000; //if PORT env var is missing only then will it take 5000

const app = express(); 
//creates an instance of an Express application. 
//This instance, stored in the app variable, will be used to configure your server and define routes.


app.use(express.json()); //this is a middleware that allows us to accept JSON data in the req.body
//middleware is just a function that runs before you response back to client  

app.use("/api/products", productRoutes);
//this prefixes /api/products before all the routes defined in product.route.js
//telling this file to use productRoutes from the product.route.js file


//for development, calling app.listen to start the server is a standard practice.
//binds the express application to specified port (5000) and starts listening for incoming HTTP requests.
//The connectDB() function is called to establish a connection to the MongoDB database before the server starts listening for requests.
//The callback function logs a message to the console indicating that the server has started successfully.

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT)
});

//This line does two important things:
//1. It starts a server that listens for HTTP requests on port 5000 (asynchronous)
//2. It executes the callback function once the server has started, which logs "Server started at Localhost" to the console




//using environment variables is important for reasons like security, separation of concerns, and deployment flexibility.
//It allows you to keep sensitive information out of your codebase, 
//making it easier to manage different configurations for different environments (development, testing, production) without changing the code itself.