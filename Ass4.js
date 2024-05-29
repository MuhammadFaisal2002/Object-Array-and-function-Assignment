var students = [];
var stud1 = {
    name: "Faisal",
    seniorStatus: false,
    assignmentDone: true
};
var stud2 = {
    name: "Faisal",
    seniorStatus: true,
    assignmentDone: true
};
var stud3 = {
    name: "Faisal",
    seniorStatus: false,
    assignmentDone: false
};
students.push(stud1, stud2, stud3);
for (var i = 0; i < students.length; i++) {
    if (students[i].assignmentDone && students[i].seniorStatus) {
        console.log(students[i]);
    }
}
