const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
       
    },
    description:{
        type: String,
        
    },
    quantity:{
        type:Integer

    },
    password:{
        type: String 

    },
    price:{
        type: Integer

    },
    
}
, {timestamps : true , versionKey : false})

const Product = mongoose.model('Product',ProductSchema,"Product")
module.exports = Product;