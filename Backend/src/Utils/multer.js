const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../../Image/')); // determining the place where the dragged file will be placed in local machine.
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // getting the full filename with its type photo.jpg --> jpg in this case
  },
});

const fileFilter = (req, file, cb) => { // only these types of files are accepted
  let types = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
  if (!types.includes(file.mimetype)) { // if another type is dragged and dropped into drag-drop zone, it will give 'Invalid type' error
    return cb(new Error('Invalid type'), false);
  }
  return cb(null, true);
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
