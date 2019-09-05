'use strict';

// //Demonstrating difference between let, var, const
// //Code for var
// // console.log("Demonstrating var:");
// // var b;
// // var func = () =>{
// //     var b=100;
// //     console.log("Inside function b = " +b);
// // }
// // func();
// // console.log("Outside function b = " + b);
// // var b=10;
// // console.log("Updated b global scope = " +b)


// //Code for let
// // console.log("Demonstrating let:");
// // let a;
// // let func = () => {
// //     let a = 100;
// //     console.log("Inside function a = " + a);
// // }
// // func();
// // let a = 200;
// // console.log("Outside function a = " + a);

// // Code for const
// // console.log("Demonstrating const:");
// // const a = 100;
// // let func = () => {
// //     let a = 100;
// //     console.log("Inside function a = " + a);
// // }
// // func();
// //  a = 200;
// //console.log("Outside function a = " + a);


// // Demonstrating difference between call, bind, apply

// //Call
// var obj = {num:10};
// var addToThis = function (a){
//     return this.num + a;
// };
// console.log("Demonstrating Call:");
// console.log(addToThis.call(obj, 15));

// //Apply
// var addToThis = function (a, b, c) {
//     return this.num + a + b + c;
// };
// var array = [15, 30, 30];
// console.log("Demonstrating Apply:");

// console.log(addToThis.apply(obj, array));

// //Bind
// var obj2 = {num:5};
// var temp = addToThis.bind(obj);
// console.log("Demonstrating Bind:");

// console.log(temp(11, 22, 33));

// Callback, Promise, Async and Await

function printString(string, callback) {
    setTimeout( () => {
        console.log(string);
        callback();
        },
        Math.floor(Math.random() * 100) + 1
        )
};

//Callback
// console.log("Promise Demonstrated:")
// function printAll() {
//     printString("A", () => {
//         printString("B", () => {
//             printString("C", () => {})
//         })
//     })
// }
// printAll()

//Promise

function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(string)
                resolve()
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

// function printAll() {
//     printString("A").then(() => printString("B")).then(() => printString("C"))
// }
// printAll();

//Async Await
async function printAll() {
    await printString("A");
    await printString("B");
    await printString("C");
}
printAll()