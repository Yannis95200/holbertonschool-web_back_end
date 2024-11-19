export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((students) => students.location === city);
  const updatedStudents = studentsInCity.map((students) => {
    const newGrade = newGrades.find((grade) => grade.studentId === students.id);
    return {
      ...students,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return updatedStudents;
}
