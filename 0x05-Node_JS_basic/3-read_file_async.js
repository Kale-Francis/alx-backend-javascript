// 3-read_file_async.js
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Skip header
    if (students.length === 0) throw new Error('Cannot load the database');

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (field) {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      }
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    return Promise.resolve();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;