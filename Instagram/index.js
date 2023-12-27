const express = require('express')
const app= express()
const userRounter = require('./routers/userRouter.js')
const postRounter = require('./routers/postRouter.js')
const connection = require('./configs/connectDB.js')
const viewEngine = require('./configs/viewEngine.js')
const postTypeRounter = require('./routers/postTypeRouter.js')
const bodyParser = require('body-parser')
const jwt = require('./middleware/JWTAction.js')
const path = require('path')


require('dotenv').config()

//config view engine
viewEngine(app)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/instagram/post/',postRounter)
app.use('/api/instagram/user/',userRounter)
app.use('/api/instagram/post_type/',postTypeRounter)
app.use(express.static("public"))
app.use(express.static("node_modules"));
app.use(express.static(__dirname+'images'))

connection()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log('Server running..............')
})