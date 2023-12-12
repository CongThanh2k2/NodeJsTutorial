const userServer = require('../servers/userServer.js')

const loginPageController = {
    getText: async(req, res) => {
        return res.render("login.ejs")
    },
    login: async(req, res) => {
        // if (!req.body.username || !req.body.password) {
        //     res.status("400")
        //     res.send('Invalid details!')
        // } else {
        //     userServer.getAllUser
        //     return res.render("home.ejs")
        // }
        let user=userServer.getAllUser
        console.log('check: ',user)
        return res.render("home.ejs",{user})
    }

}

module.exports = loginPageController