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
    createUser: async(mobile_number, password, email, username)=>{
        try {
            await db.User.create({
                mobile_number: mobile_number,
                password:password,
                email:email,
                username:username
            })
        } catch (error) {
            console.log(error)
        }
    },
    findUserByUsername: async(username)=>{
        try {
            const user = await db.User.findOne({
                where:{
                    username:username
                }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    },
    findUserByEmail: async(email)=>{
        try {
            const user = await db.User.findOne({
                where:{
                    email:email
                }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    },
    findUserByID: async(id)=>{
        try {
            const user = await db.User.findOne({
                where:{
                    id:id
                }
            })
            return user
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = userServer