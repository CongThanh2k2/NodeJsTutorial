const express = require('express')


const configViewEngine = (app)=>{
    app.use(express.static('./views'))
    app.set("view engine", "ejs");
    app.set("views","./views/login")
}

module.exports = configViewEngine