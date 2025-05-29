export default function updateStudentGradeByCity(students, city, newGrades){
    if (!Array.isArray(students) || !Array.isArray(newGrades)){
        return [];
    }
    const studentsByCity = students.filter(student => student.location === city);
    return studentsByCity.map(student => {
        const gradeEntry = newGrades.find(grade => grade.studentId === student.id);
        if (gradeEntry) {
            return { ...student, grade: gradeEntry.grade };
        }
        return { ...student, grade: 'N/A' };
    });
}