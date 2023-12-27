const db = require('../models/index.js')

const postMediaServer={
    createPostMedia: async(post_id, index_post_media, media_path)=>{
        try {
            await db.post_media.create({
                post_id:post_id,
                index_post_media:index_post_media,
                media_path:media_path
            })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = postMediaServer