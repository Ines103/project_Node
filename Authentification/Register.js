const Client = require("../../Models/Client");
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {
    try {
       const find = await Client.findOne({email : req.body.email})
       if (find !=null) {
        res.status(400).send('email already exist')
       } else {
        const salt = bcrypt.genSaltSync(10);
         req.body.password = bcrypt.hashSync(req.body.password, salt);
        const User =  await Client.create(req.body)
            res.status(201).send(User)
       }
      
    } catch (error) {
        res.status(500).send('Server Error')
    }
}