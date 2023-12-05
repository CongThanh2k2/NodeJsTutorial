const express = require('express')
const app = express()
const loginRounter = require('./backend/routers/loginRounter.js')


require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(express.static(__dirname + '../node_modules/bootstrap/dist'));


app.use('/api/instagram/',loginRounter)

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log('Server running.........')
})
