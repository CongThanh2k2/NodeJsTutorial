const db = require('../models/index.js')

const postServer={
    createPost: async(create_user_id, post_type, caption, x_location, y_location, name_location)=>{
        try {
            await db.Post.create({
                create_user_id:create_user_id,
                post_type:post_type,
                caption:caption,
                x_location:x_location,
                y_location:y_location,
                name_location:name_location
            })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = postServer