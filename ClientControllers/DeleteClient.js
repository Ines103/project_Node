const Client = require("../../Models/Client");

exports.DeleteClient = async  (req, res) => {
    try {
        await Client.findByIdAndDelete(request.params.id)
        res.send('Deleted Succssefully')
    } catch (error) {
        console.log('Server Error')
    }
}