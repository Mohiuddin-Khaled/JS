// what is javascript
// how it works?
// var, let const : scope, re-assign/re-define, type-change
// data type
// function: normal, anonymous
// objects
// string
// array
// loop
// problem solving

// start js code
// console.log("Hello World!");
// upper camel case ----> MohiuddinKhaled
// lower camel case ---> mohiuddinKhaled

/*
    var ----> re-assign, re-declare
    let ----> re-assign, not re-declare
    const ----> not re-assign, not re-declare
*/

// var, let, const
// value replace
// var x = 5;
// var x = 10;
// console.log(x);

// if (true) {
//     var x = 5;
//     console.log(x);
// }

// if (true) {
//     let y = 10;
//     console.log(y);
// }

// var x = 5;
// if (true) {
//     console.log(x);
// }

// let y = 10;
// if (true) {
//     console.log(y);
// }

// if (true) {
//     var x = 5;
// }
// console.log(x);

// if (true) {
//     let y = 10;
// }
// console.log(y);

// var x = 5;
// if (true) {
//     var x = 10;
//     console.log(x);
// }
// console.log(x);

// var x = "Rayhan";
// console.log(x);
// console.log(typeof x);

// var x = 5;
// console.log(x);
// console.log(typeof x);

// const x = "Rayhan";
// console.log(x);
// x = 5;
// console.log(x);

// let x = "Rayhan";
// console.log(x);
// x = 5;
// console.log(x);

// let x;
// console.log(x);
// console.log(typeof x);

// data are 8 types: string, number, bigint, object, null, undefine, boolean, symbol

// NaN
// let square = function (x) {
//     return x * x;
// }
// console.log(typeof square());

// BitInt
// let value = BigInt(123456789012345678901234567890);
// console.log(value);

// undefine
// let x;
// console.log(x);

// symbol
// const sym3 = Symbol('description');
// console.log(sym3.description);
// symbol as object properties
// const sym = Symbol('uniqueProperty');
// const obj = {
//     [sym]: "value"
// };
// console.log(obj[sym]);


// js object: name, value pair ||| py object: key, value pair
// function are 2 types: normal, anonymous

// normal function
// function Square(x) {
//     return x * x;
// }
// console.log(Square(5));

// Anonymous function
// var Square = function (x) {
//     return x * x;
// }
// console.log(typeof Square());
// output ---> NaN: Not a Number

// Anonymous function
// var square = function (x) {
//     return x * x;
// }
// console.log(square(5));


// object
// const car = {
//     type: "Fait",
//     model: "500",
//     color: "white",
// };
// console.log(car.model);
// console.log(car.color);
// console.log(car.type);

// object & anonymous function
// var cars = {
//     name: "Tesla",
//     brand: "X",
//     start: function () {
//         console.log("Car Started!");
//     },
//     drive: function () {
//         console.log("Driving Started!");
//     }
// }
// cars.start();
// cars.drive();
// console.log(cars.brand);
// console.log(cars.name);

// object & anonymous function
// var cars = {
//     name: "Tesla",
//     brand: "x",
//     start: function () {
//         console.log("car started!");
// mention function name
// cars.drive();
// mention function name object
//         this.drive();
//     },
//     drive: function () {
//         console.log("driving started!");
//     }
// }
// cars.start();

// string declare
// javascript self understand variable type that's why called dynamically typed language
// x = "Robiul"; // litoral syntax
// console.log(x);
// console.log(typeof x);

// object declare
// Don't declare this way because its object which slow down execution speed.
// str = new String(); // string object
// num = new Number(); // number object
// check = new Boolean() // boolean object
// ar = new Array(); // array object

// sting declare use single/double quotation
// var str1 = "hello world";
// var str2 = "hello 'world'";
// var str3 = 'hello "world"';
// console.log(str1);
// console.log(str2);
// console.log(str3);

// var str = "Hello\\'s world";
// console.log(str);
// var _str = "country \"name\" bangladesh";
// console.log(_str);
// var str2 = "Robiul\
//  Islam";
// console.log(str2);
// var str3 = "Hello " + "world";
// console.log(str3);

// string template way-1
// var str = `hello world`;
// console.log(str);
// string template way-2
// var str1 = `Hello world`
// console.log(str1)
// string template way-3
// var str2 = ` hello


// world
// `
// console.log(str2);

// == or ===
// var x = "John";
// var y = new String("John");
// check value --> Loose equality
// console.log(x == y);
// check value and type --> Strict equality
// console.log(x === y);

// // != or !==
// let x = "Hello";
// let y = new String("World");
// Not equal check value --> Loose Inequality
// console.log(x != y);
// check value and type --> Strict Inequality
// console.log(x !== y);

// objects are not compare
// let x = new String("hello");
// let y = new String("hello");
// check value, but object don't compare
// console.log(x == y);
// check value and type, but object don't compare
// console.log(x === y);

// array
// var num = [1, 2, 3, 4, 5];
// console.log(num[0]);
// num[0] = 10;
// console.log(num[0]);

// loop ---> for, while, do......while
// for loop ----> for loop, for in, for of
// for loop ---> variable type always use let
// let -->not re-declare,  re-assign
// for in ---> mostly use in object
// for of ---> mostly use in string, array ---> iterable

// for loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// array value access use for loop
// var num = [1, 2, 3, 34, 4];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// for in use
// var num = [1, 2, 34, 4, 5, 22];
// in ---> index
// for (value in num) {
//     console.log(value);
// }
// in ---> index and value
// for (value in num) {
//     console.log(num[value]);
// }
// for of use in array
// for (value of num) {
//     console.log(value);
// }

// for of, for in ---> for in use object
// const obj = {
//     name: "Hello",
//     height: 5.7,
//     weight: 62,
// };

// for of ---> pair value
// for (value of Object.entries(obj)) {
//     console.log(value);
// }
// for of ---> value
// for (value of Object.values(obj)) {
//     console.log(value);
// }

// for in ---> pair index
// for (value in Object.entries(obj)) {
//     console.log(value);
// }
// for in ---> pair index
// for (value in Object.values(obj)) {
//     console.log(value);
// }

// LeetCode Problem
// www.leetcode.com/problems/two-sum
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }
// var nums = [2, 7, 11, 15];
// console.log(twoSum(nums, 9));

// Array check
// var num = [1, 2, 3, 45, 56];
// initially array is a object when check use typeof keyword
// console.log(typeof num);
// actual array check Array.isArray() function
// console.log(Array.isArray(num));

// object check
// var nums = {
//     name: "Hello",
//     massage: "js",
// };
// initially object is object when check use typeof keyword
// console.log(typeof nums);
// object check use Array.isArray() function
// output is false because it's object
// console.log(Array.isArray(nums));