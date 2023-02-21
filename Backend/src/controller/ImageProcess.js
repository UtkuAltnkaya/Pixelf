const { spawn } = require('child_process');
const path = require('path');

const imageProcess = async (req, res) => {
  // Runs c++ file with env variable
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

  cppApp.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cppApp.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  const { code } = await new Promise((resolve, reject) => {
    cppApp.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      resolve({ code });
    });
  });

  res.status(200).json({ code });
};

module.exports = { imageProcess };