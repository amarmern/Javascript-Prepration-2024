const http = require('http');

const user = [{ name: 'test' }, { name: 'test2' }];
const server = http.createServer((req, res) => {
  if ((req.path == '/user', req.method == 'GET')) {
    res.statusCode(200);
    res.end(JSON.stringify(user));
  } else if ((req.path == '/user', req.method === 'POST')) {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk.toString();
    });
    res.on('end', () => {
      try {
        res.statusCode(200);
        const parseData = JSON.parse(body);
        res.end(JSON.stringify({ users: parseData }));
      } catch (error) {
        res.end('Invalid user');
      }
    });
  }
});

server.listen('Server started on PORT 3000');
