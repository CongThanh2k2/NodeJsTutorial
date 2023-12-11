const db = require('../models/index.js')

const userServer={
    getAllUser: async(req,res)=>{
        try {
            await db.User.findAll().then(user=>{
                res.json(user)
            })
        } catch (error) {
            console.log(error)
        }
    },
    createUser: async(req,res)=>{
        try {
            const {mobile_number, password, email, username}= req.body
            await db.User.create({
                mobile_number: mobile_number,
                password:password,
                email:email,
                username:username
            })
            res.json('create successful')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = userServer