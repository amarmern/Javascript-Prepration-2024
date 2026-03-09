const express = require('express');

const fs = require('fs');
const zlib = require('zlib');
const status = require('express-status-monitor');

const app = express();
const PORT = 8000;

app.use(status());

fs.createReadStream('./modules/longfile.txt').pipe(
  zlib.createGzip().pipe(fs.createWriteStream('./modules/sample.zip')),
);

app.get('/streamdemo', (req, res) => {
  const stream = fs.createReadStream('./modules/longfile.txt', 'utf-8');
  stream.on('data', (chunk) => res.write(chunk));
  stream.on('end', () => res.end);
});

app.listen(PORT, () =>
  console.log(`service is running http://localhost:${PORT}`),
);

// //another code

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   const stream = fs.createReadStream('./test.txt', 'utf-8');
//   let data = stream.on('data', (chunk) => res.write(chunk));
//   // stream.on('end', () => res.end);

//   res.status(200).json({
//     status: 'success',
//     user: { fName: 'amrendra', lName: 'kumar' },
//     data,
//   });

//   stream.on('end', () => res.end);
// });

// app.listen(PORT, () => {
//   console.log(`Server is listning on port ${PORT}`);
// });

// var fs = require('fs');

// let data = '';

// let readStream = fs.createReadStream('./test.txt', 'utf-8');
// readStream.on('data', function (chunk) {
//   data += chunk;
// });

// readStream.on('end', function () {
//   console.log(data);
// });

// readStream.on('error', function (err) {
//   console.log(err.message);
// });
