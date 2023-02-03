const Product = require('../../Models/Product')



exports.UpdateProduct = async  (req, res) => {
    try {
       const fetch = await Product.findByIdAndUpdate(req.params.id, req.body); 
        const UpdateProduct = await Product.findById(req.params.id)       
        res.send(UpdateProduct)
    } catch (error) {
        res.status(500).send('Error Server')
    }
}