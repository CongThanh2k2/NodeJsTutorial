const userServer = require('../servers/userServer.js')
const userProfileServer = require('../servers/userProfileServer.js')
const jwt = require('../middleware/JWTAction.js')
const postServer = require('../servers/postServer.js')
require('dotenv').config()

const loginPageController = {
    getText: async(req, res) => {
        return res.render("login.ejs")
    },
    login: async(req, res) => {
        const {username, password} = req.body

        const user = await userServer.findUserByUsername(username)
        if (user) {
            if(user.password==password){
                const userProfile = await userProfileServer.findUserProfileByUserID(user.id)
                let payLoad = {
                    email :user.email,
                    username: user.username,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
                let token = jwt.createJWT(payLoad)
                res.cookie("token",token,{
                    httpOnly:true
                })
                let postList = await postServer.getAllPostByUserId(user.id)

                return res.render("home.ejs",{user,userProfile,postList})
                // return token
            }else{
                return res.json({error: "password"})
            }
        } else {
            return res.json({error: "username"})
        }
    }

}
module.exports = loginPageController