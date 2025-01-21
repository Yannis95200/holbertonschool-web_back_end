const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const databaseFilePath = process.argv[2];

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  if (!databaseFilePath) {
    res.status(500).send('Database file path is missing');
    return;
  }

  fs.readFile(databaseFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Unable to read the file');
      return;
    }

    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const students = {
      total: 0,
      cs: [],
      swe: [],
    };

    lines.forEach((line) => {
      const [name, course] = line.split(',').map((s) => s.trim());
      if (course === 'CS') {
        students.cs.push(name);
      } else if (course === 'SWE') {
        students.swe.push(name);
      }
      students.total += 1;
    });

    const csList = students.cs.join(', ');
    const sweList = students.swe.join(', ');

    res.send('This is the list of our students\n'
             + `Number of students: ${students.total}\n`
             + `Number of students in CS: ${students.cs.length}. List: ${csList}\n`
             + `Number of students in SWE: ${students.swe.length}. List: ${sweList}`);
  });
});

app.listen(1245);

module.exports = app;
