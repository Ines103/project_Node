const Product = require("../../Models/Product");

exports.DeleteProduct = async  (req, res) => {
    try {
        await Product.findByIdAndDelete(request.params.id)
        res.send('Deleted Succssefully')
    } catch (error) {
        console.log('Server Error')
    }
}