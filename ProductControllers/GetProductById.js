const Product = require('../../Models/Product')


exports.GetProductById = async  (req , res) => {
try{
    const Fetch = await Product.findById(req.params.id)
    
    res.status(200).send(Fetch) 
}catch(error){
    res.status(500).json({message:'Server Error'})
}

}