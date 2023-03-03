const express = require('express');
const upload = require('../Utils/multer');
const checkInput = require('../middleware/middleware');

const { imageProcess, uploadImage, output } = require('../controller/ImageProcess');
const router = express.Router();

//Post when use post to the /image-process and run "imageProcess function"
router.post('/image-process', checkInput, imageProcess);
router.post('/upload-image', upload.single('image'), uploadImage);
router.get('/output/:fileName', output);

module.exports = router;
