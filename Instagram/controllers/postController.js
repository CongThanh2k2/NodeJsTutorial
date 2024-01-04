const multer = require('multer')
const postServer = require('../servers/postServer.js')
const postMediaServer = require('../servers/postMediaServer.js')
const jwt = require('../middleware/JWTAction.js')
const userServer = require('../servers/userServer.js')
const userProfileServer = require('../servers/userProfileServer.js')


const postController = {
    upload: async (req, res, err) => {
        
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
        
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (!req.file) {
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                return res.send(err);
            }

            const data = jwt.verifyToken(req.cookies.token)
            const dataUsername = data.username
            const user =await userServer.findUserByUsername(dataUsername)
            const userProfile = await userProfileServer.findUserProfileByUserID(user.id)
            
            var filePath = req.file.path+''
            
            const path = filePath.substring(filePath.search("post"),filePath.length)

            const userid = user.id
            const newPost = await postServer.createPost(userid,null,null,null,null,null)
            const postID = newPost.id
            await postMediaServer.createPostMedia(postID,1,path)

            let allPost = await postServer.getAllPost()

            const postList = await Promise.all(allPost.map(async(post)=>{
                let postHasPath ={}
                postHasPath.id = post.id
                let path = await postMediaServer.getPostMedia(post.id)
                postHasPath.path = path.media_path
                let userCreated = await userServer.findUserByID(post.created_user_id)
                postHasPath.user_created = userCreated.username
                postHasPath.caption = post.caption
                postHasPath.reaction_count = post.reaction_count
                postHasPath.comment_count = post.comment_count
                return postHasPath
            }))


            res.render("home.ejs",{user,userProfile,postList,path});
            
    }
}
module.exports = postController