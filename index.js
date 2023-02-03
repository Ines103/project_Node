const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const nodemailer = require('nodemailer')
dotenv.config()
require('./Passport_Strategies/Bearer');
require('./DataBase/Connect');
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))




/**
 * Client Routes
 */
const ClientRoute = require('./Routers/ClientRoutes')
app.use(ClientRoute)
/**
 * Product Routes
 */
const ProductRoute = require('./Routers/ProductRoutes');
app.use(ProductRoute)



/**
 * mail routes
 */
//const mail = require('./Routes/MailRoutes')



/**
 * Listen to requests
 */
app.listen(5000, function(){
    console.log('app is listening on port 8000')
})
















