const express = require('express');

const fs = require('fs');
const zlib = require('zlib');
const status = require('express-status-monitor');

const app = express();
const PORT = 8000;

app.use(status());

fs.createReadStream('./modules/longfile.txt').pipe(
  zlib.createGzip().pipe(fs.createWriteStream('./modules/sample.zip'))
);

app.get('/streamdemo', (req, res) => {
  const stream = fs.createReadStream('./modules/longfile.txt', 'utf-8');
  stream.on('data', (chunk) => res.write(chunk));
  stream.on('end', () => res.end);
});

app.listen(PORT, () =>
  console.log(`service is running http://localhost:${PORT}`)
);
