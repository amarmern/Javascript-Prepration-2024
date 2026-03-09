// Requiring module
const express = require('express');
const app = express();

function middleware1(req, res, next) {
  // Set data
  req.dataFromMiddleware1 = 'Data of Middleware 1';
  // Go to next middleware
  next();
}

function middleware2(req, res, next) {
  console.log('We are in Middleware 2.');
  // Get Data of Middleware1
  console.log(req.dataFromMiddleware1);
  // Go to next middleware
  next();
}

// Handling Get Request '/'
app.get('/', middleware1, middleware2, (req, res) => {
  return res.send(req.dataFromMiddleware1);
});

// Server Setup
app.listen(5000, () => {
  console.log(`Server is up and running on 5000 ...`);
});
