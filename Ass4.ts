interface stud  {
    name : string
    seniorStatus : boolean,
    assignmentDone : boolean
}
let students = []
let stud1 : stud={
    name : "Faisal",
    seniorStatus : false,
    assignmentDone : true
}
let stud2 : stud={
    name : "Faisal",
    seniorStatus : true,
    assignmentDone : true
}
let stud3 : stud={
    name : "Faisal",
    seniorStatus : false,
    assignmentDone : false
}
students.push(stud1,stud2,stud3)
for (let i=0; i < students.length; i++){
if (students[i].assignmentDone && students[i].seniorStatus){
    console.log(students[i]);
}
}