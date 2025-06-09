// 5-http.js
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(process.argv[2]);
      res.end();
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Hello ALX!');
  }
});

app.listen(1245);

module.exports = app;