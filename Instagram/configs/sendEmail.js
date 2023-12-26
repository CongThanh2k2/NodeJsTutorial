const nodemailer = require("nodemailer");
const mailgen = require("mailgen");
require('dotenv').config()

const sendEmail = (toEmail, username, code) => {
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS_WORD
        }
    }

    let transporter = nodemailer.createTransport(config)

    let mailGenerator = new mailgen({
        theme: "default",
        product: {
            name: "Instagram",
            link: 'http://mailgen.js/'
        }
    })

    let response = {
        body: {
            name: username,
            intro: "Tesst",
            table: {
                data: [
                    {
                        code: code
                    }
                ]
            },
            outro: "Thanks you"
        }
    }

    let mail = mailGenerator.generate(response)

    // var content = '';
    // content += `
    //     <div style="padding: 10px; background-color: #003375">
    //         <div style="padding: 10px; background-color: white;">
    //             <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
    //             <span style="color: black">Đây là mail test</span>
    //         </div>
    //     </div>
    // `;
    let message = {
        from: process.env.EMAIL,
        to: toEmail,
        subject: "Send email",
        html: mail
        // html: content
    }

    transporter.sendMail(message)
//     .then(() => {
//         return res.status(201).json({
//             msg: "you should receive an email"
//         })
//     }).catch(error => {
//         return res.status(500).json({ error })
//     })
}

module.exports = sendEmail