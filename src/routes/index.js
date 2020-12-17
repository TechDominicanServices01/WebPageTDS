const express= require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'gmail',
    secure: true,
    auth: {
        user: 'jmenainfo@gmail.com',
        pass: '@Menadiaz'
    }
});


router.get('/', (req,res) =>{
    res.render('pages/index')
});

router.post('/', (req,res) =>{
    let mailOptions = {
        from: 'jmenainfo@gmail.com',
        to: 'contacto@techdominicanservices.com',
        subject: req.body.Asunto,
        text: `Nombre: ${req.body.Nombre} ${req.body.Apellido}, 
        Email: ${req.body.Email} te envio este mensaje: ${req.body.Mensaje}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            
          res.render('pages/alertError')
        } else {
          res.render('pages/alert')
        }
      });
});
 


module.exports = router;