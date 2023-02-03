const Client = require('../../Models/Client')
const bcrypt = require('bcryptjs')


exports.login = async (req , res )=>{
    try{const find = await Client.findOne({email : req.body.email} );
        if (find != null && bcrypt.compareSync(req.body.password, find.password) ) {
            const jwt = require('jsonwebtoken');
            const data = {
                userId: find._id,
                userEmail:find.email
            }
            const token = jwt.sign(data, 'secret', {expiresIn :"1h"});
            res.status(200).send(token)
    
        }else{
            res.status(400).send('Verify email and password')
        }}
    catch{
        res.status(500).send('Server Error')
    }
}