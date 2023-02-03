const Client = require("../../Model/Client");

//Client's controllers:

exports.AddClient = async (req, res) => {

    try {
        const mission = await  Mission.create(req.body)
        res.status(201).send(mission);
        
    } catch (error) {
        res.status(500).send('Server Error');
    }
}

exports.DeleteClient = async (req, res)  => {
    try {
        await Client.findByIdAndDelete(req.params.id)
        res.send('Deleted Succssefully')
    } catch (error) {
        console.log('Server Error')
    }
}

exports.FetchClient = async (req ,res) => {
    try {
  const Result=  await Mission.find()
  if(Result.length > 0 ) {
    res.status(201).send(Result)
  } else{
      res.status(404).send('pas de donnée a afficher')
  }
}catch(error)
{
    res.status(500).send("error serveur") 
}
}