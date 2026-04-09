const express = require('express');
const rateLimiter = require('./1.rate-limitting');
const rateLimiter = require('../../test1');

const app = express();

//app.use(rateLimiter);
app.use(test1);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
