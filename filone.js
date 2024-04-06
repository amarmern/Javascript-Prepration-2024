// const fs = require('node:fs');

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {});
