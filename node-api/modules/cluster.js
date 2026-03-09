const cluster = require('cluster');
const os = require('os');
const express = require('express');
const status = require('express-status-monitor');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();
  const PORT = 8000;

  app.get('/', (req, res) => {
    res.status(200).send('succees');
  });
  app.use(status());
  app.listen(PORT, () =>
    console.log(`service is running http://localhost:${PORT}`),
  );
}
