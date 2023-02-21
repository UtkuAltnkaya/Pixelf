const express = require('express');
const router = express.Router();
const { imageProcess } = require('../controller/ImageProcess');

//Post when use post to the /image-process and run "imageProcess function"
router.post('/image-process', imageProcess);

module.exports = router;
