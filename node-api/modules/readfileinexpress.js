const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('./test.txt', 'utf8', function (err, data) {
    if (err) throw err;

    res.json(data); //do operation on data that generates say resultArray;
  });
});

app.listen(5000, () => console.log(`service is running on 5000 port`));
