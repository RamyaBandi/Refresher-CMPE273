//Input
let nameList = "John Doe,Jane Doe,Jim Harper,Kelly Kapoor";
console.log("\nInput String = "+ nameList)

//Split function
let splitList=(localVar)=>{
    return localVar.split(",");
}
let splitNameList = splitList(nameList);
console.log("\nAfter splitting string:")
for (i in splitNameList){
    console.log(splitNameList[i])
}

//Slice function
let sliceList=(localVar)=>{
    return localVar.slice(1,2,3);
}
let slicedNameList = sliceList(splitNameList);
console.log("\nAfter Slicing = " +slicedNameList);

//Includes
let checkPresence=(nameToCheck, localVar)=>{
    return localVar.includes(nameToCheck);
}

let nameToCheck = "Jane Doe";
let presenceStatus = checkPresence(nameToCheck, splitNameList);
console.log("\n"+nameToCheck +" present in the list? => "+presenceStatus );

//typeof
let displayType = (nameList, splitNameList, slicedNameList, empty) => {
    console.log("Data type of input is = " + typeof(nameList));
    console.log("Data type of split input is = " + typeof(splitNameList));
    console.log("Data type of sliced input is = " + typeof (slicedNameList));
    console.log("Data type of null input is  =  " + typeof (empty));

}
console.log("\nData types of Variables:")
displayType(nameList, splitNameList, slicedNameList);

//stringify function
stringifiedOutput = JSON.stringify(splitNameList);
console.log("\nStringified List = "+stringifiedOutput);
//parse function
console.log("\nParsed List:");
console.log(JSON.parse(stringifiedOutput));