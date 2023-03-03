const checkInput = (req, res, next) => {
  try {
    checkNumber('-blockSize', req.body['-blockSize'], 64, 'Invalid block size', 'block-size-input');
    checkBool('-kmeans', req.body['-kmeans'], 'kmeans-input');
    checkNumber('-cluster', req.body['-cluster'], 32, 'Color number must be 0 to 32', 'cluster-input');
    checkBool('-colorPalette', req.body['-colorPalette'], 'color-palette-input');
    checkNumber('-index', req.body['-index'], 22, 'Color palette does not exist', 'selectedColorPaletteIndex');
    checkNumber('-interIndex', req.body['-interIndex'], 2, 'Style does not exist', 'style-input');
    checkBool('-grayScale', req.body['-grayScale'], 'gray-scale-input');
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
      type: error.inputId,
    });
  }
};

const checkNumber = (type, input, range, message, inputId) => {
  if (!input) {
    throw {
      message: `${type} is required`,
      inputId,
    };
  }
  const intInput = parseInt(input);
  if (intInput < 0 || intInput > range) {
    throw { message, inputId };
  }
};

const checkBool = (type, input, inputId) => {
  if (!input) {
    throw {
      message: `${type} is required`,
      inputId,
    };
  }

  if (input !== 'false' && input !== 'true') {
    throw { message: `${type} must be true or false`, inputId };
  }
};

module.exports = checkInput;
