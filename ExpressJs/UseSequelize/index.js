const express = require('express')
const app = express()
const userRounter = require('./routers/userRouter.js')
const connection = require('./config/connectDB.js')
const { DataTypes } = require('sequelize')

require('dotenv').config

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/user/',userRounter)

const PORT = process.env.PORT

//test connect
connection()

app.listen(PORT,()=>{
    console.log('Server running.........')
})