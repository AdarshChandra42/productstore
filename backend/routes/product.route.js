//we'll add all our API endpoints in this page

import express from "express"; 
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

//we first define the routes and then start the server.

// app.get("/", (req, res)=>{
//     res.send("Server is ready");
// });
//req is request, res is response. 

router.post("/", createProduct);  

router.delete("/:id", deleteProduct); 
//:id means dynamic id

router.get("/", getProducts);

router.put("/:id", updateProduct);
//you use patch when you're updating some field
//you use put when you're updating all the fields

export default router; 