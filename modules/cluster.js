const cluster = require('cluster');
const os = require('os');
const express = require('express');

const totalCPU = os.cpus().length;
if (cluster.isPrimary) {
  for (let i = 0; i < totalCPU; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 8000;

  app.get('/', (req, res) => {});

  app.listen(PORT, () =>
    console.log(`service is running http://localhost:${PORT}`)
  );
}
