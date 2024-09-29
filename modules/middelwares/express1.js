const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world', status: 200 });
});
const PORT = 3000;
app.listen((PORT) => console.log(`server is runnning on port ${PORT}`));
