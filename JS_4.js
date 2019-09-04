'use strict';
class clockType{
    constructor(){
        console.log("\nCalling Parent's Constructor");
        this.hours = 10;
        this.minutes = 10;
        this.seconds = 35;
        this.clockOwner = {
            firstName: "John",
            lastName: "Doe",
            age: "25",
        }
    }
    setTime(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        console.log("Calling First Function");
    }
    setTime(hours, minutes) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = 0;
        console.log("\nCalling Overriding Function");

    }
}
class childClock extends clockType{
    constructor() {
        super();
        console.log("\nCalling Child's Constructor");

        this.hours = 22;
        this.minutes = 22;
        this.seconds = 22;
    }
}

//Creating Object of Child. But Parent constructor is also calle dude to Inheritance.
let obj = new childClock();
console.log(obj);

//Object Manipulation. Assigning new owner using Object.assign
let newOwner ={
    firstName: 'Bob', lastName: 'Marley', age: '50'
}
Object.assign(obj.clockOwner,newOwner)
console.log()

//Demonstrating Method Overriding
obj.setTime(12,12,59);
console.log(obj);
