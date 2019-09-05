'use strict';
//Input Object
var studentRecords={
    name: "John Doe",
    courseGrades: {CMPE200: 4, CMPE220: 3, CMPE240: 2.5 , CMPE273: 3.5},
    studentRating: [90, 92, 67, 75, 77, 83, 81],
    skills: ["C++", "Docker", "Python", "AWS"],
    email: "johndoe@sjsu.edu",
}
console.log("The Input object is:" + JSON.stringify(studentRecords))

//Spread and Rest Operator
let [...studentRating] = studentRecords.studentRating;
let maxRating = () => {
    return Math.max(...studentRating);
}
console.log("\nMaximum Rating obtained = " + maxRating())

//Closure is demonstrated here
let avgRating = (_studentRating) => {
    var size=_studentRating.length;
    var avg="Average Rating is = ";
    var findAvg = () => {
        var sum=0;
        for (var i in _studentRating) {
            sum+=_studentRating[i];
        }
        return avg + (sum / size);
        }
        return findAvg;
    }

var averageRating = avgRating(studentRating)();
console.log("\n" +averageRating);

//Destructure Object
let extractGrades= (studentRecords)=>{
    let {courseGrades} = studentRecords;
    console.log("\nDestructured Object Output: ");
    console.log(courseGrades);
}
extractGrades(studentRecords);

//Destructure Array
let extractSkill = (studentRecords)=>{
    let [topSkill] = studentRecords.skills;
    console.log("\nDestructed Array Output: The first skill in list is = " +topSkill );
}
extractSkill(studentRecords);