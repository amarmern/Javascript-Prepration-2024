const http = require('http');
const url = require('url');

const PORT = 3000;

let users = [
  { id: 1, name: 'Amrendra' },
  { id: 2, name: 'Kumar' },
];

const server = http.createServer((req, res) => {
  // set the header
  res.hasHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/api/user') {
    // const responseData = {
    //   message: 'Hello from http server',
    //   timeStamp: new Date().toISOString(),
    // };
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (req.method === 'POST' && req.url === '/api/user') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString(); // accumlate the data
    });

    req.on('end', () => {
      try {
        const parseData = JSON.parse(body);
        res.statusCode = 201; // created
        res.end(JSON.stringify({ users: parseData, status: 'Success' }));
      } catch (error) {
        (res.statusCode = 400),
          res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      }
    });
  } else {
    //Handle 404 Not found
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'End Point not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
