const Product = require('../../Models/Product')

const nodemailer = require('nodemailer');
const Client = require('../../Models/Client');

exports.Affect = async function (req, res) {
    try {
       const fetch = await Product.findByIdAndUpdate(req.params.idproduct, {$push: { equipe : req.params.idclient}} );
      
        const UpdatedProduct = await Product.findById(req.params.idproduct) /// Mission Modifier        
 
  const affectedclient = await Employee.findById(req.params.idclient)
        let transporter = nodemailer.createTransport({
         service: 'Gmail' ,
            auth: {
                user:"bellaajines498@gmail.com", 
                pass:"zloaqrnroooxazrc",
            },
        
          });
    
          let info = await transporter.sendMail({
            from: 'bellaajines498@gmail.com', 
            to: affectedclient.email, 
            subject: "Assignment of a product  ✔", 
            text:`Hello Mr/Midd ${affectedclient.name} you are gettion a product: ${UpdatedProduct.name}`, // plain text body
            
          });
        res.send(UpdatedProduct)
    } catch (error) {
        res.status(500).send('Server Error')
    }
}