const db = require("../database/models");
const nodeMailer = require('nodemailer');
require('dotenv').config();

module.exports = {
  subscriberData: async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email } = req.body;

    try {
      if (req.body.email && req.body.email != "") {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(regex)) {
          let Data = {}

          if (req.body.firstName) {
            Data.firstName = firstName
          }
          if (req.body.lastName) {
            Data.lastName = lastName
          }
          if (req.body.email) {
            Data.email = email
          }
          console.log(Data);
          const response = await db.subscriber.create(Data);
          let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              type: "login",
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            }
          });

          let data = `<html>
          <body>
          <p>Hello ${req.body.firstName} ${req.body.lastName}</p>
          <p>Thanks for Subscribing to our blogging website. Visit again to read our blogs</p>
          <p>Thanks for visiting our website.</p>
          <p>Visit Again :)</p>
          </body>
          </html>`

          console.log(transporter);
          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: '"Divanshu Zinta" <divansh271@gmail.com>',
            to: req.body.email,
            subject: "Thanking Mail for subscribing my website",
            text: "hello?",
            html: data,
          });

          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodeMailer.getTestMessageUrl(info));

          return res.status(200).json(response);
        } else {
          res.status(400).send('Please enter correct email')
        }
      } else {
        return res.status(404).send('Enter Email address')
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  },
};
