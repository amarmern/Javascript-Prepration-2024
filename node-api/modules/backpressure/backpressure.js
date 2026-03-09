const fs = require('fs');

const read = fs.createReadStream('big.txt');
const write = fs.createWriteStream('out.txt');

read.on('data', (chunk) => {
  const ok = write.write(chunk);

  if (!ok) {
    read.pause(); // APPLY BACKPRESSURE
  }
});

write.on('drain', () => {
  read.resume(); // RESUME when ready
});
