const Product = require("../../Models/Product");



exports.AddProduct=  async(req,res ) =>{
    try{
   

   const product = await  Product.create(req.body)
        res.status(201).send(product);
    
}catch(error)
{
    res.status(500).send("Server Error")
}
  }