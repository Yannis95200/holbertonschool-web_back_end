export default function getListStudentIds(Students) {
  if (!Array.isArray(Students)) {
    return [];
  }

  return Students.map((Students) => Students.id);
}
