const Client = require('../../Models/Client')


exports.GetClientById = async  (req , res) => {
try{
    const Fetch = await Client.findById(req.params.id)
    
    res.status(200).send(Fetch) 
}catch(error){
    res.status(500).json({message:'Server Error'})
}

}