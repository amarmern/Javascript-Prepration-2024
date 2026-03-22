const http = require('http');

const users = [{ name: 'test1' }, { name: 'test2' }];
let body = '';
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/users') {
    res.status = 200;
    res.end(JSON.stringify(users));
  }

  if (req.method === 'POST' && req.url === '/api/user') {
    res.on('data', (chunk) => {
      body += chunk.toString();
    });

    res.on('end', () => {
      try {
        const parseData = JSON.parse(body);
        res.status = 201;
        res.end(JSON.stringify({ users: parseData, status: 'Success' }));
      } catch (error) {
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      }
    });
  }
});

server.listen((PORT = 3000), () =>
  console.log(`Server is running on PORT, ${PORT}`),
);
