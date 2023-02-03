const express = require('express');
const { AddProduct } = require('../ProductControllers/AddProduct');
const { DeleteProduct } = require('../ProductControllers/DeleteProduct');
const { GetProduct } = require('../ProductControllers/GetProduct');
const { GetProductById } = require('../ProductControllers/GetProductById');
const { UpdateProduct } = require('../ProductControllers/UpdateProduct');



const router = express.Router();

router.get("/products", GetProduct)
router.post("/product" , AddProduct)
router.get("/product/:id" , GetProductById)
router.put("/productt/:id" , UpdateProduct)
router.delete("/products/:id" , DeleteProduct)




module.exports = router;