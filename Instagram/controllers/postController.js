const postServer = require('../servers/postServer.js')
const multer = require('multer')



const postController = {
    upload: async (req, res, err) => {
        
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
        
            if (req.fileValidationError) {
                console.log('xxxxxx OK1')
                return res.send(req.fileValidationError);
            }
            else if (!req.file) {
                console.log('xxxxxx OK2')
                return res.send('Please select an image to upload');
            }
            else if (err instanceof multer.MulterError) {
                console.log('xxxxxx OK3')
                return res.send(err);
            }
            const path = req.file.path
            // Display uploaded image for user validation
            res.redirect({path});
        
    }
}
module.exports = postController