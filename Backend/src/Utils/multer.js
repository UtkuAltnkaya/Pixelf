const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../Image/'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  let types = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
  if (!types.includes(file.mimetype)) {
    return cb(new Error('Invalid type'), false);
  }
  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
