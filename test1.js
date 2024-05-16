var fs = require('fs');
const express = require('express');
const app = express();

let content = '';

app.get('/', (req, res) => {
  fs.readFile('./JAVASCRIPT-TASK/test.tsx', 'utf-8', (err, data) => {
    content += data;
  });
  res.status(200).json({
    data: {
      content,
    },
  });
});
