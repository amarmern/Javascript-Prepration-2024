const fs = require('fs');
const http = require('http');

// const textIn = fs.readFileSync('./modules/test.txt', 'utf-8');

// console.log(textIn);

// let content = `Data read from input.txt: ${textIn} \n Date create at ${new Date()}`;
// fs.writeFileSync('./modules/output.txt', content);

// fs.readFile('./modules/test.txt', 'utf-8', (err, data) => {
//   try {
//     console.log(data);
//   } catch (error) {
//     console.log(err, 'not found');
//   }
// });

//http node

// const server = http.createServer((req, res) => {
//     res.end('Hello from node server');
//   console.log('A new request recieved');
// });

// const server = http.createServer(); // event emmiter

// // event listner
// server.on('request', (req, res) => {
//   res.end('Hello from node server');
// });

// // event handler
// server.listen(5000, () => {
//   console.log('server startted, 5000');
// });

//stream
