//Part 1: Declaring and invoking functions
function greet(name = 'Hello!') {
    // return greeting here
    return console.log(name);
}

greet('Hello World!');  //Logs Hello World!
greet('Hello Professor!');  //Logs Hello Professor!
greet();  //The output of this will be Hello!

console.log("---------------------------------");




//Part 2: Working with parameters and returning values
function addNumbers(num1, num2) {
    // return sum here
    return console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
}

addNumbers(1,3);
addNumbers(10, 12);

console.log("----------------------------------");




//Part 3: Function Scope
let x = 10;
 
function changeValue() {
    // declare a new x locally here
    let x = 12;
    return x;
}

console.log(`The original value of x is: ${x}`);
console.log(`The local value of x is: ${changeValue()}`);

console.log("----------------------------------------");




//Part 4: Closures
function outerFunction() {
    let count = 0;
    return function() {
        // update count here
            count++;  //Adds 1 to the counter everytime it is declared.
            return console.log(count);  
    }
}

let counter = outerFunction();
console.log("Increment Counter starting at 0:")
counter();
counter();
counter();
counter();

function outerFunctionTwo() {
    let count = 8;
    return function() {
        // update count here
            count--;  //Subtracts 1 to the counter everytime it is declared.
            return console.log(count);  
    }
}

let counter2 = outerFunctionTwo();
console.log("Decrement Counter starting at 8:")
counter2();
counter2();
counter2();
counter2();