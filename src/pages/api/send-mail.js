import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
        res.status(200).end();
        return;
    }

    const { email: toMail } = req.body;

    if (!toMail) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_SEND_FROM,
                pass: process.env.NODEMAILER_APP_PASS,
            },
        });

        let mailOptions = {
            from: process.env.NODEMAILER_SEND_FROM,
            to: toMail,
            subject: 'Subscribed to News Letter',
            text: 'You have been subscribed to News Letter of iTrain',
            html: '<b>You have been subscribed to News Letter of iTrain</b>',
        };

        let info = await transporter.sendMail(mailOptions);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ success: true, info });
    } catch (error) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(500).json({ success: false, error: error.message });
    }
}
