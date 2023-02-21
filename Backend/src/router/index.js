const { Router } = require('express');
const router = Router();
const imageProcess = require('./ImageProcess');

//Use router for image process
router.use('/', imageProcess);

module.exports = router;
