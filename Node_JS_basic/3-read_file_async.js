const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');
    // Split the data into lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // Ensure there is at least a header line
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Extract the student data (excluding the header)
    const studentData = lines.slice(1);

    // Create a map to count students by field
    const fields = {};
    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      // Ignore invalid or incomplete lines
      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Calculate and log the total number of students
    const totalStudents = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;