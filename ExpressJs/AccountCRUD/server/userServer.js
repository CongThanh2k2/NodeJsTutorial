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
    }
}

module.exports = userServer