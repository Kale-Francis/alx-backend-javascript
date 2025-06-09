// 7-http_express.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  try {
    await countStudents(process.argv[2]);
    res.end();
  } catch (error) {
    res.end('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;