const fs = require('fs');

app.get('/download', (req, res) => {
  const stream = fs.createReadStream('largefile.ts', 'utf-8');
  stream.pipe(res);
});
