const connection = require('../databases/index.js')

const userServer = {
    getAll : async(req, res)=>{
        try {
            const [rows,fields] = await connection.query("SELECT * FROM accounts.users;")
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    },

    getById : async(req,res)=>{
        try {
            const {id} = req.params
            const [rows,fields] = await connection.query("SELECT * FROM accounts.users where id=?;",id)
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
        }
    }, 

    create: async(req, res)=>{
        try {
            const {username, password} = req.body
            const sql = 'INSERT INTO `accounts`.`users` ( `username`, `password`) VALUES ( ?, ?);'
            const [rows,fields] = await connection.query(sql,[username, password])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    update: async(req,res)=>{
        try {
            const {username, password} = req.body
            const {id} = req.params
            const sql = 'UPDATE `accounts`.`users` SET `username` = ?, `password` = ? WHERE (`id` = ?);'
            const [rows,fields] = await connection.query(sql,[username, password,id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    },

    delete: async(req,res)=>{
        try {
            const {id} = req.params
            const sql = 'DELETE FROM `accounts`.`users` WHERE (`id` = ?);'
            const [rows,fields] = await connection.query(sql,id)
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                status: "error"
            })
        }
    }
}

module.exports = userServer