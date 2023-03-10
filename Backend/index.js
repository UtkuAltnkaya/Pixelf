const express = require('express');
const router = require('./src/router');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(express.json());
app.use('/', router);
// app.use('/output', express.static(path.join(__dirname + "\\Output\\")));

// console.log(path.join(__dirname + "\\Output\\"));

//Listen 3000 port
app.listen(port, () => {
  console.log('http://localhost:3000');
});
