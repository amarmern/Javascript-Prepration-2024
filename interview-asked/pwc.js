async function readAndProcessFiles() {
  try {
    const file1 = fs.readFile('file1.txt', 'utf-8');
    const file2 = fs.readFile('file2.txt', 'utf-8');

    const combined = file1 + file2;

    await saveToFile(combined);
  } catch (err) {
    console.log('Error occurred:', err);
  }
}

async function saveToFile(data) {
  fs.writeFile('output.txt', data);

  console.log('File saved successfully');
}

async function main() {
  readAndProcessFiles();

  console.log('Processing done');
}

main();

/*
If an interviewer asks what's wrong:

readFile() returns Promises, but they're not awaited.
writeFile() is asynchronous but not awaited.
readAndProcessFiles() is called without await.
Promise-based fs module should be used.
file1 + file2 concatenates Promise objects instead of file contents.

This question is commonly used to test understanding of Promises, async/await, event loop, and asynchronous file operations in Node.js.
*/

//sollution
const fs = require('fs/promises');

async function readAndProcessFiles() {
  try {
    const [file1, file2] = await Promise.all([
      fs.readFile('file1.txt', 'utf-8'),
      fs.readFile('file2.txt', 'utf-8'),
    ]);

    const combined = file1 + file2;

    await saveToFile(combined);
  } catch (err) {
    console.log('Error occurred:', err);
  }
}

async function saveToFile(data) {
  await fs.writeFile('output.txt', data);
  console.log('File saved successfully');
}

async function main() {
  await readAndProcessFiles();
  console.log('Processing done');
}

main();

// using stream

const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

const stream1 = fs.createReadStream('file1.txt');
const stream2 = fs.createReadStream('file2.txt');

stream1.pipe(writeStream, { end: false });

stream1.on('end', () => {
  stream2.pipe(writeStream);

  stream2.on('end', () => {
    console.log('File saved successfully');
  });
});
