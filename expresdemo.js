const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<html><body>Hello </body> </html>');
});
app.listen(5000, () => console.log('running on port 5000'));
