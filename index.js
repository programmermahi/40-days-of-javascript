console.log("Hello from Day 3!");

//let x=4+5

// arithmetic operators
let x = 10;
let y = 20;
let f_name ="Mohibullah";
let l_name ="Almahin";

console.log("Full Name: " + f_name + " " + l_name);
console.log("Addition: " + (x + y));
console.log("Subtraction: " + (x - y));
console.log("Multiplication: " + (x * y));
console.log("Division: " + (x / y));
console.log("Modulus: " + (x % y));
console.log("Exponentiation: " + (x ** y));

let count=5;
count++;
console.log("Incremented Count: " + count);
count--;
console.log("Decremented Count: " + count);


// assignment operators
console.log("*** assignment operators ***");
let a = 10;
console.log("Initial a: " + a);
a += 5; // a = a + 5
console.log("After a += 5: " + a);
a -= 3;
console.log("After a -= 3: " + a);
a *= 2;
console.log("After a *= 2: " + a);
a /= 4;
console.log("After a /= 4: " + a);
a %= 3;
console.log("After a %= 3: " + a);
a **= 2;
console.log("After a **= 2: " + a);


// comparison operators
console.log("*** comparison operators ***");
let p = 15;
let q = 20;
console.log(p==q); // false
console.log(p!=q);
console.log(0== false); // true
console.log(0=== false);
console.log(0!== false);
console.log(3=='3'); // true
console.log(3==='3');
console.log(3!= '3');
console.log(3!== '3');
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null === null); // true
console.log(undefined === undefined); // true

//Nan=Not a Number
console.log(NaN == NaN);

// logical operators
console.log("*** logical operators ***");
let age = 25;
let hasID = true;
console.log((age >= 18) && hasID); // true
console.log((age < 18) || hasID);   // true
console.log(!(age < 18));           // true     
console.log(!(hasID));              // false        
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true
console.log((age < 18) || !hasID);  // false
console.log((age >= 18) && !hasID); // false
console.log((age < 18) || hasID);   // true
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true
console.log((age < 18) || !hasID);  // false
console.log(!(age >= 18));          // false
console.log(!(hasID));              // false
console.log((age >= 18) && !hasID); // false
console.log((age < 18) || hasID);   // true
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true
console.log((age < 18) || !hasID);
// false
console.log(!(age >= 18));          // false

console.log(!(hasID));              // false
console.log((age >= 18) && !hasID); // false

console.log((age < 18) || hasID);   // true
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true

console.log((age < 18) || !hasID);  // false
console.log(!(age >= 18));          // false

console.log(!(hasID));              // false
console.log((age >= 18) && !hasID); // false
console.log((age < 18) || hasID);   // true
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true
console.log((age < 18) || !hasID);  // false
console.log(!(age >= 18));          // false
console.log(!(hasID));

                // false
console.log((age >= 18) && !hasID); // false
console.log((age < 18) || hasID);   // true
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log((age >= 18) || !hasID); // true

console.log((age < 18) || !hasID);  // false
console.log(!(age >= 18));
            // false
console.log(!(hasID));              // false
console.log((age >= 18) && !hasID); // false
console.log((age < 18) || hasID);   // true 
console.log((age >= 18) && hasID); // true
console.log((age < 18) && hasID);   // false
console.log("cow" && "dog"); // dog
console.log("" && "dog"); // ""
console.log("cow" && ""); // ""
console.log("" && ""); // ""

console.log("cow" || "dog"); // cow
console.log("" || "dog"); // dog
console.log("cow" || ""); // cow
console.log("" || ""); // ""    

console.log(!false); // true
console.log(!true); // false 

let a1 = null ?? 1;//1
let a2 = undefined ?? 2;//2
let a3 = 3 ?? 3;//3
let a4 = 0 ?? 4;//0
let a5 = "" ?? 5;//""
let a6 = false ?? 6;//false