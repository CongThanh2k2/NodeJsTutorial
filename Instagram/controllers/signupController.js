const userServer = require('../servers/userServer.js')
const userProfileServer = require('../servers/userProfileServer.js')
const sendMail = require('../configs/sendEmail.js')
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser')
const { body } = require('express-validator')
require('dotenv').config()

var code = null
let { email, username, password, fullname } = ''

const signupController = {
    openSignup: async (req, res) => {
        return res.render("signup.ejs")
    },
    signup: async (req, res) => {
        email = req.body.email
        username = req.body.username
        password = req.body.password
        fullname = req.body.fullname
        // //check null
        if (email == '') {
            return res.json({ error: "Email Not null" });
        }
        if (fullname == '') {
            return res.json({ error: "Fullname Not null" });
        }
        if (username == '') {
            return res.json({ error: "Username Not null" });
        }
        if (password == '') {
            return res.json({ error: "Pass Not null" });
        }
        // body('email').custom(async value => {
        //     const user = await userServer.findUserByEmail(email)
        //     if (user) {
        //         return res.json({ error: "Email exist" });
        //     }
        // })
        //check email
        const checkEmail = await userServer.findUserByEmail(email)
        if (checkEmail) {
            return res.json({ error: "Email exist" });
        }
        //check username
        const checkUsername = await userServer.findUserByUsername(username)
        if (checkUsername) {
            return res.json({ error: "Username exist" });
        }

        code = Math.floor(Math.random() * 100000) + 99999

        const sendEmail = sendMail(email, username, code)
        console.log(">>>>>>>check code", code)
        // const salt = bcrypt.genSaltSync(10);
        // const hashCode = bcrypt.hashSync(''+code,salt)
        // console.log(">>>>>>>check hashcode",hashCode)
        return res.render("verifyOTP.ejs")


    },
    verifyOTP: async (req, res) => {
        console.log(">>>>>>>>>check OTP", code)
        const { otp } = req.body
        console.log(">>>>>>>>>check OTP", otp)
        if (otp == code) {
            await userServer.createUser(null, password, email, username)
            const user = await userServer.findUserByUsername(username)
            if (user) {
                userProfileServer.createUserProfile(user.id, fullname, null, null, null, null, null, null)
                return res.render("login.ejs")
            } else {
                res.status(404).json({ error: "User does not exist" });
            }
        } else {
            alert("sai")
        }
    }
}
module.exports = signupController