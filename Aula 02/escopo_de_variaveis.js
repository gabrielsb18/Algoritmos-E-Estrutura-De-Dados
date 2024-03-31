var myVariable = "Global";
myOtherVriable = "global";

function myFunction() {
    var myVariable = "local";
    return myVariable;
}

function myOtherFunction(){
    myOtherVriable = "local";
    return myOtherVriable;
}

console.log("myVariable: " + myVariable);
console.log(myFunction());
console.log("myOherVariable: " + myOtherVriable);
console.log(myOtherFunction());
console.log(myOtherVriable);