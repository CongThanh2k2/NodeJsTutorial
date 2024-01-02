const db = require('../models/index.js')

const postServer={
    createPost: async(create_user_id, post_type, caption, x_location, y_location, name_location)=>{
        try {
            const newPost = await db.Post.create({
                created_user_id:create_user_id,
                post_type:post_type,
                caption:caption,
                x_location:x_location,
                y_location:y_location,
                name_location:name_location
            })
            return newPost
        } catch (error) {
            console.log(error)
        }
    },
    getAllPostByUserId: async(create_user_id)=>{
        try {
            const listPostByUser = await db.Post.findAll({
                where:{
                    created_user_id: create_user_id
                }
            })
            return listPostByUser
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = postServer