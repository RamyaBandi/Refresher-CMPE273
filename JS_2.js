
//Input Object
var studentRecords={
    name: "John Doe",
    courseGrades: {CMPE200: 4, CMPE220: 3, CMPE240: 2.5 , CMPE273: 3.5},
    email: "johndoe@sjsu.edu",
}
console.log("The Input object is:" + JSON.stringify(studentRecords))


let extractGrades= (studentRecords)=>{
    let {courseGrades} = studentRecords;
    console.log(courseGrades);
}
extractGrades(studentRecords)