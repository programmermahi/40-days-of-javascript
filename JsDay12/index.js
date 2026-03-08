//  objects are a collection of key value pairs
//  they are used to store data in a structured way
//  they are also used to store functions as methods    
//  objects are created using the object literal syntax
//  objects can also be created using the object constructor syntax
//  objects can also be created using the class syntax
//  objects can also be created using the factory function syntax
//  objects can also be created using the constructor function syntax
//  objects can also be created using the object.create() method
//  objects can also be created using the object.assign() method
//  objects can also be created using the object.freeze() method
//  objects can also be created using the object.seal() method
//  objects can also be created using the object.preventExtensions() method
//  objects can also be created using the object.isExtensible() method
//  objects can also be created using the object.isSealed() method
//  objects can also be created using the object.isFrozen() method
//  objects can also be created using the object.keys() method
//  objects can also be created using the object.values() method
//  objects can also be created using the object.entries() method
//  objects can also be created using the object.fromEntries() method
//  objects can also be created using the object.hasOwnProperty() method
//  objects can also be created using the object.propertyIsEnumerable() method
//  objects can also be created using the object.toString() method
//  objects can also be created using the object.valueOf() method
//  objects can also be created using the object.constructor() method
//  objects can also be created using the object.prototype() method
//  objects can also be created using the object.__proto__() method
//  objects can also be created using the object.__defineGetter__() method
//  objects can also be created using the object.__defineSetter__() method
//  objects can also be created using the object.__lookupGetter__() method
//  objects can also be created using the object.__lookupSetter__() method
//  objects can also be created using the object.__defineProperty__() method
//  objects can also be created using the object.__lookupProperty__() method
//  objects can also be created using the object.__delete__() method
//  objects can also be created using the object.__hasOwnProperty__() method
//  objects can also be created using the object.__propertyIsEnumerable__() method
//  objects can also be created using the object.__toString__() method
//  objects can also be created using the object.__valueOf__() method
//  objects can also be created using the object.__constructor__() method
//  objects can also be created using the object.__prototype__() method
//  objects can also be created using the object.__proto__() method
//  objects can also be created using the object.__defineGetter__() method  
//  objects can also be created using the object.__defineSetter__() method
//  objects can also be created using the object.__lookupGetter__() method
//  objects can also be created using the object.__lookupSetter__() method
//  objects can also be created using the object.__defineProperty__() method
//  objects can also be created using the object.__lookupProperty__() method
//  objects can also be created using the object.__delete__() method
//  objects can also be created using the object.__hasOwnProperty__() method
//  objects can also be created using the object.__propertyIsEnumerable__() method
//  objects can also be created using the object.__toString__() method
//  objects can also be created using the object.__valueOf__() method
//  objects can also be created using the object.__constructor__() method
//  objects can also be created using the object.__prototype__() method
//  objects can also be created using the object.__proto__() method
//  objects can also be created using the object.__defineGetter__() method
//  objects can also be created using the object.__defineSetter__() method
//  objects can also be created using the object.__lookupGetter__() method
//  objects can also be created using the object.__lookupSetter__() method
//  objects can also be created using the object.__defineProperty__() method
//  objects can also be created using the object.__lookupProperty__() method
//  objects can also be created using the object.__delete__() method
//  objects can also be created using the object.__hasOwnProperty__() method    
//  objects can also be created using the object.__propertyIsEnumerable__() method
//  objects can also be created using the object.__toString__() method
//  objects can also be created using the object.__valueOf__() method
//  objects can also be created using the object.__constructor__() method
//  objects can also be created using the object.__prototype__() method
//  objects can also be created using the object.__proto__() method
//  objects can also be created using the object.__defineGetter__() method
//  objects can also be created using the object.__defineSetter__() method
//  objects can also be created using the object.__lookupGetter__() method
//  objects can also be created using the object.__lookupSetter__() method
//example of object literal syntax
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   
};
person.greet(); // Hello, my name is John and I am 30 years old.

//example of object constructor syntax
const person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
person2.greet(); // Hello, my name is Jane and I am 25 years old.

//example of class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person3 = new Person("Jack", 35);
person3.greet(); // Hello, my name is Jack and I am 35 years old.

//example of factory function syntax
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }   
    };
}
const person4 = createPerson("Jill", 28);
person4.greet(); // Hello, my name is Jill and I am 28 years old.

//example of constructor function syntax
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
const person5 = new PersonConstructor("Jim", 40);
person5.greet(); // Hello, my name is Jim and I am 40 years old.
//example of object.create() method
const person6 = Object.create(person);
person6.name = "Jackie";
person6.age = 32;
person6.greet(); // Hello, my name is Jackie and I am 32 years old.

//example of object.assign() method
const person7 = {};
Object.assign(person7, person);
person7.name = "Jasmine";
person7.age = 27;
person7.greet(); // Hello, my name is Jasmine and I am 27 years old.

//example of object.freeze() method
const person8 = Object.freeze({
    name: "Jason",
    age: 29,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
});
person8.greet(); // Hello, my name is Jason and I am 29 years old.
//person8.name = "Jack"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

//example of Object()
const person9 = new  Object();
person9.name = "Jacky";
person9.age = 31;
person9.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
person9.greet(); // Hello, my name is Jacky and I am 31 years old.

//example of Object.create()
const person10 = Object.create(person);
person10.name = "Jillie";
person10.age = 26;
person10.greet(); // Hello, my name is Jillie and I am 26 years old.

