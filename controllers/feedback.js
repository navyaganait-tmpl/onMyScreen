const db = require("../database/models");
const nodeMailer=require('nodemailer')
require('dotenv').config()
// const feedback = require("../database/models/feedback");
// const EMAIL=process.env.EMAIL;
// const PASSWORD=process.env.PASS;
module.exports = {

    // change name to createSubscriber
  postfeedback: async (req, res) => {
    // if else ?
    console.log(req.body);
    const { firstName, lastName, email, reviews } = req.body;
    
    try {
      if(req.body.email && req.body.email!=""){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(regex)){
          let Data ={}

          if ( req.body.firstName) {
            Data.firstName = firstName
          }
          if ( req.body.lastName) {
            Data.lastName = lastName
          }
          if ( req.body.email) {
            Data.email = email
          }
          if ( req.body.reviews) {
            Data.reviews = reviews
          }
          console.log(Data , );
          const response = await db.feedback.create(Data);
          let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "navyaganait15@gmail.com",
              pass: "hqdgcvgctkhaicjv",
            }
          });
        

          let data =  `<html>
          <body>
          <p>Hello ${req.body.firstName} ${req.body.lastName}</p>
          <p>Thanks for giving your precious time giving feedback for my reference I'll surely consider this and will tryna' improve my website you can check your review here below:</p>
          <ul>
          <li>Your Review : ${req.body.reviews}</li>
          </ul>
          <p>Ok so you can add another review if you want to too.</p>
          <p>Thanks for visiting my website.</p>
          <p>Visit Again :)</p>
          </body>
          </html>`
          console.log(transporter);
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Navya" <navyaganait15@gmail.com>', // sender address
            to: req.body.email,
            subject: "Thanking Mail for visting my website", // Subject line
            text: "hello?", // plain text body
            html: data, // html body
          });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));
          return res.status(200).json(response);
        }else{
            res.status(400).send('Please enter correct email')
        }
      }else{
        return res.status(404).send('Enter Email address')
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
