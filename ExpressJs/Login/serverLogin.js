const express = require('express')
var app = express()
var port = 4000
var router1 = require('./apiLogin.js')
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/',router1);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})