const express = require('express')
const app= express()
const userRounter = require('./routers/userRouter.js')
const connection = require('./configs/connectDB.js')

require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/user/',userRounter)

connection()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log('Server running..............')
})