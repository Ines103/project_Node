const Client = require("../../Models/Client");



exports.AddClient=  async(req,res ) =>{
    try{
   

   const client = await  Client.create(req.body)
        res.status(201).send(client);
    
}catch(error)
{
    res.status(500).send("Server Error")
}
  }