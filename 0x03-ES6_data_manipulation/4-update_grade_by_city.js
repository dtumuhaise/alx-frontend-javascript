function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.filter((grade) => grade.studentId === student.id)[0];
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
export default updateStudentGradeByCity;
