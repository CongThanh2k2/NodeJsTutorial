const express = require('express')
const app = express()
const userRounter = require('./routers/userRouter.js')


require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/user/',userRounter)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log('Server running.....')
})

