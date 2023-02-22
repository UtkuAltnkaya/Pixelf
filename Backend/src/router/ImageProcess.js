const express = require('express');
const upload = require('../Utils/multer');

const { imageProcess, uploadImage } = require('../controller/ImageProcess');
const router = express.Router();

//Post when use post to the /image-process and run "imageProcess function"
router.post('/image-process', imageProcess);
router.post('/upload-image', upload.single('image'), uploadImage);

module.exports = router;
