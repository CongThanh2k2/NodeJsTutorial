const userServer = require('../servers/userServer.js')
const userProfileServer = require('../servers/userProfileServer.js')
const jwt = require('../middleware/JWTAction.js')
const postMediaServer = require('../servers/postMediaServer.js')
const postServer = require('../servers/postServer.js')
require('dotenv').config()

const loginPageController = {
    getText: async (req, res) => {
        return res.render("login.ejs")
    },
    login: async (req, res) => {
        const { username, password } = req.body

        const user = await userServer.findUserByUsername(username)
        if (user) {
            if (user.password == password) {
                const userProfile = await userProfileServer.findUserProfileByUserID(user.id)
                let payLoad = {
                    email: user.email,
                    username: user.username,
                    expiresIn: process.env.JWT_EXPIRES_IN
                }
                let token = jwt.createJWT(payLoad)
                res.cookie("token", token, {
                    httpOnly: true
                })

                const pageAsNumber = Number.parseInt(req.query.page)
                console.log(req.query.page)
                const sizeAsNumber = Number.parseInt(req.query.size)

                let page = 0
                if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
                    page = pageAsNumber
                }
                let size = 5
                if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && size < 5) {
                    size = sizeAsNumber
                }

                let posts = await postServer.getPagePost(page, size)
                let allPost = posts.rows



                const postList = await Promise.all(allPost.map(async (post) => {
                    let postHasPath = {}
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

                return res.render("home.ejs", { user, userProfile, postList })
                // return token
            } else {
                return res.json({ error: "password" })
            }
        } else {
            return res.json({ error: "username" })
        }
    },
    load: async (req, res) => {
        const data = jwt.verifyToken(req.cookies.token)
        const dataUsername = data.username
        const user = await userServer.findUserByUsername(dataUsername)
        const userProfile = await userProfileServer.findUserProfileByUserID(user.id)
        const pageAsNumber = Number.parseInt(req.query.page)
        
        const sizeAsNumber = Number.parseInt(req.query.size)

        let page = 0
        if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
            page = pageAsNumber
        }
        
        let size = 5
        if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && size < 5) {
            size = sizeAsNumber
        }

        let posts = await postServer.getPagePost(page, size)
        let allPost = posts.rows

        


        const postList = await Promise.all(allPost.map(async (post) => {
            let postHasPath = {}
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

        return res.render("home.ejs",{ user , userProfile, postList })
    }

}
module.exports = loginPageController