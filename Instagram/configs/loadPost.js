const postServer = require('../servers/postServer.js')
const postMediaServer = require('../servers/postMediaServer.js')
const jwt = require('../middleware/JWTAction.js')
const userServer = require('../servers/userServer.js')

const loadPost = () => {
    const data = jwt.verifyToken(req.cookies.token)
    const dataUsername = data.username
    const user = userServer.findUserByUsername(dataUsername)
    let postList = postServer.getAllPostByUserId(user.id)

}

module.exports = loadPost