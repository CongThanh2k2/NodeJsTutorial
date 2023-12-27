const multer = require('multer')
const postServer = require('../servers/postServer.js')
const postMediaServer = require('../servers/postMediaServer.js')


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
            const path = req.file.path
            // Display uploaded image for user validation
            res.redirect({path});
            
    }
}
module.exports = postController