const Product = require("../../Models/Product");


exports.GetProduct = async (req, res) => {
    try {
        console.log('hello from get client');
        const Result = await Product.find()
        console.log(Result);
        res.send(Result)

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message || 'Server Error'})
    }
}