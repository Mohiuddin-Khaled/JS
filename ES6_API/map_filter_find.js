// map(),find(),filter() alternative used loop
// map(),find(),filter() apply on loop

// const num = [2, 2, 5, 6];
// const tmp = [];
// for (let i = 0; i < num.length; i++) {
//     tmp.push(num[i] * num[i]);
// }
// console.log(tmp);

// arrow function
// variable_type function_name = () => {
// code
// }
// call the function
// function_name();

// map() uses
// const num = [2, 2, 5, 6];
// const value = num.map(x => console.log(x));

// map work on individual array element
// return new array
// let num = [2, 3, 4, 5];
// let value = num.map(x => x * x);
// console.log(value);

// filter()
// const products = [
//     { id: 1, name: "apple", price: 500, color: "golden" },
//     { id: 2, name: "xiaomi", price: 124, color: "black" },
//     { id: 3, name: "samsung", price: 200, color: "black" },
//     { id: 4, name: "samsung2", price: 200, color: "black" },
//     { id: 5, name: "lenovo", price: 300, color: "pink" },
//     { id: 6, name: "xiaomi", price: 100, color: "pink" },
//     { id: 7, name: "lenovo", price: 300, color: "pink" },
// ];
// array each object print
// const result = products.filter((x) => console.log(x));
// array specific object print
// const value = products.filter((x) => x.color == "black");
// console.log(value);
// array specific object print
// const value1 = products.filter((x) => x.color == "pink");
// console.log(value1);
// const value2 = products.filter((x) => x.name == "xiaomi");
// console.log(value2);
// const value3 = products.filter((pd) => pd.color !== "black");
// console.log(value3);
// const value4 = products.filter((pd) => pd.color === "black");
// console.log(value4);

// find()
// const value5 = products.find((x) => x.id === 1);
// console.log(value5);
// const value6 = products.find((x) => x.color === "black");
// console.log(value6);
// set null in specific object element parameter
// const value7 = products.find((pd) => pd.color = null);
// console.log(products);