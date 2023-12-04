const express = require('express')
var app = express()
const port = 4000
var router = express.Router

app.get('/',(rep,res,next)=>{
    console.log(1)
    next()
},(rep,res,next)=>{
    console.log(2)
    next()
},(rep,res,next)=>{
    console.log(3)
    next()
}
)

app.use((res,red,next)=>{
    
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})