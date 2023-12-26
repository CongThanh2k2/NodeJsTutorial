const userServer = require('../servers/userServer.js')

const loginPageController = {
    getText: async(req, res) => {
        return res.render("login.ejs")
    },
    login: async(req, res) => {
        const {username, password} = req.body

        const user = await userServer.findUserByUsername(username)
        if (user) {
            if(user.password==password){
                return res.render("home.ejs")
            }else{
                return res.json({error: "password"})
            }
        } else {
            return res.json({error: "username"})
        }
    }

}
module.exports = loginPageController