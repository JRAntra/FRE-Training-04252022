// "use strict"

// ~~~~~~~~~~~~~~~~~~~~ Day 1 ~~~~~~~~~~~~~~~~~~~~

/**
 *  * @class
 * what is javascript, ECMAScript
 * javascript vs. nodejs vs. ECMAScript
 *
 * Primitive Data
 * Object Data or reference Data
 *
 * coercion
 * equality == vs. ===
 *
 * var vs. let vs. const
 *
 * oop: Object oriented programming in JS
 * encapsulation; inheritance; Poly-morph-ism; abstraction;
 * constructer function, prototype chain
 *
 */

// Javascript = ESMscript + Web Api
// Nodejs = ESMscript + Node Api
// ES6

// Primitive Date
// string, number, boolean, undefined, null
// console.log(typeof null); // Typescript  ---> null

// var a = true;
// var b = new Number(0);
// console.log(b);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof NaN);

// // transfer by value;
// var a = 0;
// var b = a;

// // Reference Data, Object data

// var arr = [];
// var arr1 = new Array();

// console.log([].length === undefined)
// arr.length

// // coercion

// console.log(typeof (1 - 'test')); // NaN
// var a = 12345;
// console.log(1 + 1 + '12');

// // == vs. ===
// console.log(1 == '1'); // coercion check;

// var data = {
//     id: 123
// }
// var mark = 123;
// console.log(+mark === +data.id); // check
// console.log(null == undefined); //
// console.log(NaN == NaN);

// for (var i = 0; i < 5; i++) {
// 	if (i) {
// 		console.log(i);
// 	}
// }

// //               var       let      const       function
// hoisting         y         y         y             y
// scope         function    block     block        block

// function foo() {
//     console.log(bar);

//     if (true) {
//         function bar() {
//             return 2;
//         }
//     }
// }
// console.log(foo());

// const obj = {
//     name: 'Jojo'
// }
// function foo(obj) {
//     obj.name = 'Dio';
// }
// foo(obj);
// console.log(obj.name);

// // function
// // oop: Object Oriented Programming:  Class --> ES6
// // encapsulation
// class Person {
//     // #name;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // get name() {
//     //     console.log(Math.random() * 100);
//     //     return this.#name;
//     // }
//     // set name(newname) {
//     //     this.#name = newname;
//     //     console.log('rerender');
//     // }
//     foo() {
//         console.log(this.#name + ' is ' + this.age);
//         console.log(`${this.#name} is ${this.age}`); // string template
//         console.log(this.#name, 'is', this.age);
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.foo = function() {
//     console.log(`${this.name} is ${this.age}`);
// }
// const person = new Person('Jojo', 18);

// person.__proto__.bar = function() {
//     console.log('hello world');
// }

// const ps = new Person('Dio', 188);

// ps.bar();

// Array.prototype.myForEach = function() {
//     console.log('myForEach');
// }

// person.name = 'Dio';
// console.log(person.name);

// const obj = {};
// obj.name = 'Dio';
// console.log(obj);


// function foo(a, b) {
//     return 5
// }
// const a = foo('abc', 3);
// const b = foo('456', 5);

// inheritance
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     foo() {
//         console.log(this.name + ' is ' + this.age);
//     }
// }
// class Employee extends Person {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }
//     foo(name = 'default') {
//         console.log(name);
//     }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.foo = function() {
//     console.log(`${this.name} is ${this.age}`);
// }
// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = company;
// }
// Employee.prototype = Person.prototype;

// const employee = new Employee('Jojo', 18, 'Jump');
// console.log(employee);
// employee.foo();

// polymorphism // 
// abstruction // Ts

// ~~~~~~~~~~~~~~~~~~~~ Day 2 ~~~~~~~~~~~~~~~~~~~~
/**
 *  * @class
 *
 * prototype
 *
 * loop in JS: array, object
 * myForeach, myMap, myFilter, myReduce
 *
 * destructure
 *
 * rest parameter vs. spread operator
 *
 * object copy
 */