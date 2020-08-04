const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');



var transporter = nodemailer.createTransport({
	 host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "rohan.stutalk@gmail.com",
      clientId:"292427988066-5i31u24ei0e4ep9la470otrsd3alq2bu.apps.googleusercontent.com",
      clientSecret: "S3J4qYel2Bm8NzJAarbK0i3g",
      refreshToken: "1//04pXBOaJb6_OwCgYIARAAGAQSNwF-L9IrCKdZ8_X1wcXnTNKUWvw-V2x8hCn0nh2AIUiEDXO7VqypOr2EmTmdV8xzDLOyLjqT8hE",
      accessToken:"ya29.a0AfH6SMD4-DRRD_Hkh13u_m7Xp-iWKjhHc8Qebd0L96Kq3Z6EtWU2EBOs5ElIkZAgMvoakrcei5l_CoJ3JW5PscELL57EfmdccgOonqS1WVFkCJNO8R_bPiKTK6pZXu6_wmsjQsDXh6K7rF8yV-CzTIQHdGJsZnWS9JQ"
    }
});

var mailOptions = {
	from: 'Rohan Christopher <rohan.stutalk@gmail.com>',
	to: 'scientificrohan@gmail.com',
	cc: 'kanchisreekruthi.99@gmail.com,yashaswirao610@gmail.com,shivaniravinder19@gmail.com, guttikondareshmita@gmail.com, keerthi14072000@gmail.com, udaykumaruking@gmail.com', 
	subject:'Happy Friendship Day - Test NodeMailer',
	text: 'Hi No Snakes, happy Friendship Day LYSM <3'
};

transporter.sendMail(mailOptions, function(err,res){
	if(err){
		console.log('error: '+ err);
	} else{
		console.log('Email Sent! good Job duh :)');
	}
});
