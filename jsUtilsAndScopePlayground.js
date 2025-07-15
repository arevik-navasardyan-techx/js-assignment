// ---------Part A----------
console.log("Part A")

// function declaration

function averageOfArray(array) {
    let sum = 0;
    if (array.length === 0)
        console.log('Array is empty');
    else
        for (i = 0; i < array.length; i++) {
            sum = sum + array[i]
        }
        console.log("The average number of the array is "+sum / array.length);

}
array=[1, 5, 8, 4, 2]
averageOfArray(array);


function cycleLenght(radius) {
    console.log(`The lenght of the cycle with radius ${radius} is `+2 * Math.PI * radius);
}

cycleLenght(4);


//function expression
let capitalizeFirstLetter = function (str){
  console.log(str.charAt(0).toUpperCase() + str.slice(1))
}
capitalizeFirstLetter ("welcome");

let reverseArray = function (array){
    let reverseArr=[]
    for (i=array.length-1; i>=0; i--){
        reverseArr+= array[i]+", ";
    }
    return reverseArr;
}

console.log(`The reverse of the array ${array} is ` +reverseArray(array))


// arrow function

let add = (a, b) => a + b;
let oppositeNumber = (num) => 0-num;

console.log("Sum = " + add (47, 16));
console.log("The opposite number of 54 is "+ oppositeNumber(54));


// -----------Part B-------------
console.log('Part B')
let globalVar = 5; // global variable

function f() {
    console.log(`The global variable, declared outside of the function is ${globalVar}`)   //global variable used inside the function
    let localVar = 44;                                                                     //this variable will be used only IN this function 
    console.log(`Sum of global variable ${globalVar} and local variable ${localVar} is ${globalVar + localVar}`);
}

f();

console.log(globalVar);
//console.log(localVar); // Error as the variable doesn't exist outside of the function f


function f1(param){
  var a = 3;
  let array = []
  for(i=1; i<=param;i++){
    let num = i;
    array += num + " ";
  }
  return function print(){
    console.log(`Global variable declared by var: ${a}`);
    console.log(`Array: ${array}`);
    // As num varuable 
    // console.log(`Block scope variable, declared by let in for loop: ${num}`);
  }
}

let result = f1(3);
result()

// ---------------Part C-----------------
console.log('Part C');

// The reguliar functions, variables declared with var and classes are moved on top of the code by javascript compiler before the code execution. 
// This is called hoisting. So,before execution,compiler knows that there exist such variables, fuctions with that names but the value is still undefined
//  The temporal dead zone is the period before the execution of variables declared with let/const. When the execution reaches the variables
// and they are already known, the dead zone ends

console.log(var1); // will print undefined but not error as it is hoisted
funcInC(4,5); //will work as the function funcInC is hoisted
console.log(var2); //   will throw a ReferanceError
console.log(var3); //   will throw a ReferanceError

var var1 = 4;
function funcInC(a, b){
    console.log(a*b) ;
}

let var2 = "The variable is not hoisted"; //Not a dead zone anymore
console.log(var2); //   Okay
const var3 = "Costant value"
console.log(var3);