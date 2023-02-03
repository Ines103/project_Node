const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name:{
        type: String,
       
    },
    familyName:{
        type: String,
        
    },
    email:{
        type: String

    },
    password:{
        type: String 

    },
    role:{
        type: "Client"

    },
    
}
, {timestamps : true , versionKey : false})

const Client = mongoose.model('Client',ClientSchema,"Client")
module.exports = Client;