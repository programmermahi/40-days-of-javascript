console.log("welcome to the day 4&5")
//for loop
// a for loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.
// syntax of for loop
// for(initialization; condition; increment/decrement){
//   // code to be executed
// }    

// example of for loop
for(let i=0; i<5; i++){
    console.log("the value of i is: " + i);
}

// addition of even numbers between 1 to 100
let sum = 0;
for(let i=1; i<=100; i++){
    if(i % 2 === 0){    
        console.log(i);
        sum += i;
    }
}
console.log("the sum of even numbers between 1 to 100 is: " + sum);

let language="javascript";
for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));

}

//nested for loop
// a nested for loop is a for loop inside another for loop. The inner loop will be executed for each iteration of the outer loop.
// syntax of nested for loop    

// for(initialization; condition; increment/decrement){
//   // code to be executed
//   for(initialization; condition; increment/decrement){
//     // code to be executed
//   }
// }    
// example of nested for loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++){
        console.log("i: " + i + " j: " + j);
    }       
}

// break statement
// a break statement is used to exit a loop or switch statement before it has completed all its iterations. When a break statement is encountered, the loop or switch statement is immediately terminated and the program continues with the next statement after the loop or switch.
// syntax of break statement
// for(initialization; condition; increment/decrement){
//   // code to be executed
//   if(condition){
//     break;   
//   }
// }
// example of break statement
for(let i=1; i<=10; i++){
    //console.log(i);
    if(i === 5){
        break;
    }
    console.log(i);
}
// continue statement
// a continue statement is used to skip the current iteration of a loop and move on to the next iteration. When a continue statement is encountered, the rest of the code inside the loop for that iteration is skipped and the loop continues with the next iteration.
// syntax of continue statement 
// for(initialization; condition; increment/decrement){
//   // code to be executed
//   if(condition){
//     continue;   
//   }
// }
// example of continue statement
for(let i=1; i<=10; i++){
    if(i === 5){
        continue;
    }   
    console.log(i);
}

//multiple counters for single 
// loop
// we can use multiple counters for a single loop by separating them with a comma in the initialization and increment/decrement sections of the for loop. This allows us to keep track of multiple variables at the same time while iterating through the loop.
for(let i=1, j=10; i<=10 && j>=1; i++, j--){
    console.log("i: " + i + " j: " + j);
}   

/*
*
**
***
****
*****
*/
for(let i=1; i<=5; i++){
    let pattern = "";   
    for(let j=1; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}

/*
*****
****
***
**
*
*/
for(let i=5; i>=1; i--){
    let pattern = "";   
    for(let j=1; j<=i; j++){
        pattern += "*";
    }   
    console.log(pattern);
}

//while loop
// a while loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The loop will continue to execute as long as the condition is true.
// syntax of while loop 
// while(condition){
//   // code to be executed
// }
// example of while loop
let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// do while loop
// a do while loop is a control flow statement that allows code to be executed at least once, and then repeatedly based on a given boolean condition. The loop will continue to execute as long as the condition is true.
// syntax of do while loop
// do{
//   // code to be executed
// }while(condition);
// example of do while loop
let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 5);

//infinite loop
// an infinite loop is a loop that never ends. It can be caused by a condition that always evaluates to true, or by a loop that does not have a proper exit condition. Infinite loops can cause a program to crash or become unresponsive, so it is important to avoid them in your code.
// example of infinite loop
// while(true){
//   console.log("this is an infinite loop");
// }    

