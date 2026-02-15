const http = require('http');
let users = [
  { id: 1, name: 'Amrendra' },
  { id: 2, name: 'Kumar' },
];
const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  let body = '';
  if (req.method == 'GET' && req.url == '/api/users') {
    res.status = 200;
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
        ((res.statusCode = 400),
          res.end(JSON.stringify({ error: 'Invalid JSON body' })));
      }
    });
  } else {
    //Handle 404 Not found
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'End Point not found' }));
  }
});

server.listen((PORT = 5000), () => {
  console.log(`Server is runnig on PORT ${PORT}`);
});
