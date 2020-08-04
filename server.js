const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "SenderMail",
    clientId: " ",
    clientSecret: " ",
    refreshToken: " ",
    accessToken: " "
  }
});

var mailOptions = {
  from: "Rohan Christopher <rohan.stutalk@gmail.com>",
  to: "scientificrohan@gmail.com",
  cc:
    "kanchisreekruthi.99@gmail.com,yashaswirao610@gmail.com,shivaniravinder19@gmail.com, guttikondareshmita@gmail.com, keerthi14072000@gmail.com, udaykumaruking@gmail.com",
  subject: "Happy Friendship Day - Test NodeMailer",
  text: "Hi No Snakes, happy Friendship Day LYSM <3"
};

transporter.sendMail(mailOptions, function(err, res) {
  if (err) {
    console.log("error: " + err);
  } else {
    console.log("Email Sent! good Job duh :)");
  }
});
