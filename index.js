console.log("welcome to the day 6");
//function a function is a block of code that performs a specific task. It is a reusable piece of code that can be called multiple times in a program. Functions can take input parameters and return output values. They help to organize code and make it more modular and easier to read.

// syntax of function
// function functionName(parameters){
//   // code to be executed
// }    
// example of function
function greet(name){
    console.log("Hello " + name);
}
greet("John");
greet("Jane");  

function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("the sum of 5 and 10 is: " + sum);

function double(x){
    return x * 2;
}
console.log("the double is : " + double(sum));

//default parameters
function greet(name = "Guest"){
    console.log("Hello " + name);
}
greet();
greet("John");

function calc(a,b){
    return (2*(a * b));
}
const area = calc(5);// the value of b is undefined, this will result in NaN (Not a Number) because we are trying to perform a mathematical operation with an undefined value.
console.log("the area of rectangle is: " + area);

function calca(a,b=0){
    return (2*(a + b));
}
const area1 = calca(5);
console.log("the area of rectangle is: " + area1);


//rest parameters
function sumAll(...numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
let total = sumAll(1, 2, 3, 4, 5);
console.log("the sum of all numbers is: " + total);
console.log("the sum of all numbers is: " + sumAll(1, 2, 3, 4, 5));
function calculation(a, b, ...operations){
    let results = [];
    for(let i=0; i<operations.length; i++){
        if(operations[i] === "add"){
            results.push(a + b);
        } else if(operations[i] === "subtract"){
            results.push(a - b);
        } else if(operations[i] === "multiply"){
            results.push(a * b);
        } else if(operations[i] === "divide"){
            results.push(a / b);
        }   
    }
    return results;
}
let results = calculation(10, 5, "add", "subtract", "multiply", "divide");
console.log("the results of calculations are: " + results);

//nested functions
function outerFunction(x){
    function innerFunction(y){  
        return x + y;
    }
    return innerFunction;
}
let add5 = outerFunction(5);
console.log("the result of adding 5 and 10 is: " + add5(10));

//callback functions
/*
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}   
greet("John", sayGoodbye);
*/
/*
function greet(name, callback){
   console.log("Hello " + name);
   callback();
}

function sayBye(){
   console.log("Bye!");
}

greet("Mohibullah", sayBye);
*/
//pure functions
// a pure function is a function that always produces the same output for the same input and has no side effects. It does not modify any external state or variables and does not rely on any external state or variables. Pure functions are easier to test and debug because they are predictable and do not have any hidden dependencies.    
function add(a, b){
    return a + b;
}
console.log("the sum of 5 and 10 is: " + add(5, 10));

//impure functions
// an impure function is a function that does not always produce the same output for the same input and may have side effects. It may modify external state or variables or rely on external state or variables. Impure functions can be more difficult to test and debug because they are less predictable and may have hidden dependencies.    
let count = 0;
function increment(){
    count++;
    return count;
}
console.log("the count is: " + increment());
console.log("the count is: " + increment());

//higher-order functions
// a higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Higher-order functions are used to create more abstract and flexible code and can be used to implement functional programming concepts such as map, filter, and reduce.    
function map(arr, callback){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }   
    return result;
}
function double(x){
    return x * 2;
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = map(numbers, double);
console.log("the doubled numbers are: " + doubledNumbers);

//calback functions
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greet("John", sayGoodbye);
//arrow functions
// an arrow function is a concise way to write a function in JavaScript. It is a shorter syntax for writing function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are often used for writing simple functions and for callbacks.    
const greet = (name) => {
    console.log("Hello " + name);
}
greet("John");
const add = (a, b) => a + b;
console.log("the sum of 5 and 10 is: " + add(5, 10));
const double = x => x * 2;
console.log("the double of 5 is: " + double(5));    

//iif (Immediately Invoked Function Expression)
// an IIFE is a function that is defined and immediately invoked. It is a common pattern in JavaScript to create a new scope and avoid polluting the global namespace. IIFEs are often used for data privacy and to create modules.    
(function(){
    console.log("This is an IIFE");
})();

//recursive functions
// a recursive function is a function that calls itself in order to solve a problem. It typically has a base case that stops the recursion and a recursive case that breaks the problem into smaller subproblems. Recursive functions can be used to solve problems such as factorials, Fibonacci numbers, and tree traversal.    
function factorial(n){  
    if(n === 0){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log("the factorial of 5 is: " + factorial(5));
                                                                        