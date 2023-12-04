
const express = require('express')
var app = express()
const port = 4000
var router1 = require('./apiRouter.js')

app.get('/', (req, res) => {
    res.json('App')
})

//su dung router1
app.use('/api1/v1/',router1);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
