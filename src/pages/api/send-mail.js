import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const { email: toMail } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        host: 'smtp.gmail.com', // Replace with your SMTP server host
        port: 587, // Replace with your SMTP server port
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.NODEMAILER_SEND_FROM, // Replace with your email
            pass: process.env.NODEMAILER_APP_PASS // Replace with your app password ( dont use email pass )
        }
    });

    // Setup email data
    let mailOptions = {
        from: process.env.NODEMAILER_SEND_FROM, // Replace with your sender address
        to: toMail, // List of receivers
        subject: 'Subscribed to News Letter', // Subject line
        text: 'You have been subscribed to News Letter of iTrain', // Plain text body
        html: '<b>You have been subscribed to News Letter of iTrain</b>' // HTML body
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
        res.status(200).json({ success: true, info });
    });
}
