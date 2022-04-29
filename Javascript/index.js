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

 */

// const arr = [1122, 1222, 34123];

// const obj = {
// 	name: "Jojo",
// 	age: 12,
// 	id: 2,
// };

// console.log(obj);

// for (let index = 0; index < arr.length; index++) {
//     if (index === 1) {
//         // break;
//         continue;
//     }
//     console.log(index, 1234);
// }

// for (const index in arr) {
// }
// for (const num of arr) {
//     console.log(num);
// }
// for (const key in obj) {
// 	console.log(obj[key]);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// obj.name = 'Dio';
// // const name = 'name';
// obj[name] = 'Hello';

// Array.prototype.myForEach = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
// console.log(arr);
// console.log(arr.forEach(function(cur, i, array) {
//     array[i] = cur + 5;
//     return;
// }));

// Array.prototype.myMap = function (callback) {
// 	const array = [];
// 	for (let i = 0; i < this.length; i++) {
// 		array.push(callback(this[i], i, this));
// 	}
// 	return array;
// };

// console.log(
// 	arr.myMap(function (cur, i, array) {
// 		return cur + 5;
// 	})
// );
// const arr = [3, 4, 5];

// Array.prototype.myFilter = function (callback) {
// 	const array = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if(callback(this[i], i, this)) {
//             array.push(this[i])
//         }
// 	}
//     return array;
// };

// console.log(
// 	arr.myFilter(function (cur, i, array) {
// 		return cur >= 4;
// 	})
// );

// Array.prototype.myFilter = function (callback) {
// 	const array = [];
// 	for (let i = 0; i < this.length; i++) {
// 		if(callback(this[i], i, this)) {
//             array.push(this[i])
//         }
// 	}
//     return array;
// };

// console.log(
// 	arr.myFilter(function (cur, i, array) {
// 		return cur >= 4;
// 	})
// );

// console.log(arr);

// Array.prototype.myReduce = function (...args) {
// 	let [acc, index] = args.length > 1 ? [args[1], 0] : [this[0], 1];

// 	for (let i = index; i < this.length; i++) {
// 		acc = args[0](acc, this[i], i, this);
// 	}
// 	return acc;
// };

// const numbers = [175, 50, 25];
// console.log(numbers.myReduce(myFunc));
// // numbers.myReduce(myFunc, 0); // this[0]

// function myFunc(acc, cur) {
// 	return acc - cur;
// }
// const str = 'abc'; // <-----
// // const arr = str.split(''); // ['a', 'b', 'c'];
// console.log(str.split('').myReduce(function(acc, cur, i, array) {
//     return acc + cur + cur;
// }, '')); // 'aabbcc'
// '' + a + a = aa + b + b = aabb + c + c = aabbcc;
// const arr = [1, 2, 3];
// console.log(arr.myReduce((acc, cur) => acc - cur)); // 45 + 1 = 46 + 2 = 103 + 3 = 106
// function foo(arr) {
// 	return arr.myReduce((acc, cur) => {
// 		acc[cur.name] = cur.age;
// 		return acc;
// 	}, {});
// 	// const obj = {};
// 	// for (let i = 0; i < arr.length; i++) {
// 	// 	obj[arr[i].name] = arr[i].age;
// 	// }
// 	// return obj;
// }
// const arr = [
// 	{ name: "AA", age: 12 },
// 	{ name: "BB", age: 2 },
// 	{ name: "CC", age: 16 },
// 	{ name: "DD", age: 22 },
// ];
// console.log(foo(arr));

// // spread operator vs. rest parameter

// function sum(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
// }

// function wrapsum(sum) {
//     return function(...args) { // rest parameter : args = [1, 2, 3, 4, 5]
//         sum(...args); // spread operator : 1, 2, 3, 4, 5
//     }
// }
// const newsum = wrapsum(sum);

// newsum(1, 2, 3, 4, 5);

// function foo(num, ...args) { // take : collect
//     console.log(num, args);
// }
// foo(1, 2, '3', 5, true, 2, 4, 1)

// const arr = [1, 2, 3];
// const arr1 = [3, ...arr, 4, 5]; // drop

// const strlist = [...'abc'];

// const tarstr = 'sdfersfsrewf';
// const res = [...new Set([...tarstr])].join('');

// const obj = {
//     name: 'Jojo',
//     company: 'Jump'
// };
// const resobj = {
//     ...obj,
//     name: 'Dio',
//     age: 12,
// };

// console.log(resobj);

// // destructure
// const arr = [13, 32, 3];
// const [a, _, c] = arr;

// const obj = {
//     name: 'Jojo',
//     age: 18,
//     link: [
//         {name: 'cnn', link: 'www.cnn.com'},
//         {name: 'bbc', link: 'www.bbc.com'},
//         {name: 'fox', link: 'www.fox.com'}
//     ]
// };
// const {link} = obj;
// console.log(link.find(({name}) => name === 'bbc').link);

// const [test, name, age] = aaa;

// const a = arr[0];
// const b = arr[1];

// console.log(test, name, age);

/** @class
 * object copy
 * iife
 * closure
 * currying
 *
 * this
 * call, apply, bind
 *
 * arrow function
 *
 * event loop
 */

// const num = 1245131;

// console.log(+[...(num + '')].reverse().join(''));