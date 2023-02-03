const Client = require('../../Models/Client')



exports.UpdateClient = async  (req, res) => {
    try {
       const fetch = await Client.findByIdAndUpdate(req.params.id, req.body); 
        const UpdateClient = await Client.findById(req.params.id)       
        res.send(UpdateClient)
    } catch (error) {
        res.status(500).send('Error Server')
    }
}