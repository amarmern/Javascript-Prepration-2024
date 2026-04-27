const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];

// --- CREATE: POST ---
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// --- READ: GET (All and Single) ---
app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// --- UPDATE: PUT ---
app.put('/items/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  item.name = req.body.name;
  res.json(item);
});

// --- DELETE: DELETE ---
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
