const db = require("../models")

const userServer = {
    getAll: async(req,res)=>{
        const [rows, fields] = await db.getAll();
        res.json({
            data : rows
        })
    },

    getById: async(req,res)=>{

    }
}

module.exports = userServer