const db = require('../models/index.js')

const postTypeServer = {
    createPostType: async (req, res) => {
        try {
            const { post_type_name } = req.body
            await db.post_type.create({
                post_type_name: post_type_name
            })
            res.json('create successful')
        } catch (error) {
            console.log(error)
        }
    },
    getAllPostType: async (req, res) => {
        try {
            await db.post_type.findAll().then(postType => {
                res.json(postType)
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = postTypeServer