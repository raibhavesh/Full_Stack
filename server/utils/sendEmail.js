const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try{
		const transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: process.env.USER,
				pass: process.env.PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log(process.env.USER)
		console.log(process.env.PASS)
		console.log("email sent")
	}
	catch(error){
		console.log(error)
	}
};
