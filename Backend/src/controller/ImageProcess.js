const { spawn } = require('child_process');
const path = require('path');

const imageProcess = async (req, res) => {
  // Runs c++ file with env variable
  // Spawn a new process to run a C++ application with the specified command-line arguments
  const cppApp = spawn(path.join(__dirname, '../../../Image/build/Release/Pixelf.exe'), [
    '-fileName',
    req.body['-fileName'],
    '-blockSize',
    req.body['-blockSize'],
    '-kmeans',
    req.body['-kmeans'],
    '-cluster',
    req.body['-cluster'],
    '-colorPalette',
    req.body['-colorPalette'],
    '-grayScale',
    req.body['-grayScale'],
    '-index',
    req.body['-index'],
    '-interIndex',
    req.body['-interIndex'],
  ]);

  // Handle standard output from the C++ process
  cppApp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // Handle errors from the C++ process
  let isFailed = '';
  cppApp.stderr.on('data', (data) => {
    isFailed = data;
  });

  // Wait for the C++ process to exit and get its exit code
  const { code } = await new Promise((resolve, reject) => {
    cppApp.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      resolve({ code });
    });
  });

  // If the C++ process produced an error, return a 500 status with the error message
  if (isFailed !== '') {
    return res.status(500).json({ message: isFailed });
  }

  // Otherwise, return a 200 status with the C++ process's exit code
  res.status(200).json({ code });
};

const uploadImage = async (req, res) => {
  res.status(200).json({ message: 200 });
};

const output = async (req, res) => {
  const outputPath = path.join(__dirname + '..\\..\\..\\Output\\' + req.params.fileName);
  const fileOptions = {
    headers: {
      'Content-Disposition': `attachment; filename=${req.params.fileName}`,
    },
  };
  res.sendFile(outputPath, fileOptions, (err) => {
    if (err) {
      res.status(err.status).end();
    }
  });
};

module.exports = { imageProcess, uploadImage, output }; // Export the imageProcess and uploadImage functions for use in other parts of the application
