var path = require('path')
const loginServer = {
    get: (req, res) => {
        try {
            // var url = path.join(__dirname, '/layouts/login/login.html')
            // console.log(url)
            // var path = __dirname +'../../layouts/login/login.html';
            res.sendFile(path.resolve('layouts/login/login.html'))
        } catch (error) {
            console.log(error)
        }

    }
}
module.exports = loginServer