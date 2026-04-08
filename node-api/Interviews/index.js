const express = require('express');
const rateLimiter = require('./1.rate-limitting');

const app = express();

app.use(rateLimiter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
