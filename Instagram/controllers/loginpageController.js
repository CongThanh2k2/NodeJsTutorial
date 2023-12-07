const userServer = require('../servers/userServer.js')

const loginPageController ={
    getText: (req,res)=>{

        return res.render("login.ejs")
    }
}

module.exports = loginPageController