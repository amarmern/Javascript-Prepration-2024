const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//ROUTE === route methods + url

app.get('/', (req, res) => {
  //res.status(200).send("Hello from Server")
  res.status(200).json({ name: 'Amrendra Kumnar' });
});

app.post('/', (req, res, next) => {
  const { fname, lName } = req.body;
  res.status(201).json({ fname: fname, lName: lName });
  next(console.log(`fnane: ${fname} && lname: ${lName}`));
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
