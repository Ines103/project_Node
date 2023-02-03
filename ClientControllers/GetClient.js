const Client = require("../../Models/Client");


exports.GetClient = async (req, res) => {
    try {
        console.log('hello from get client');
        const Result = await Client.find()
        console.log(Result);
        res.send(Result)

    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message || 'Server Error'})
    }
}