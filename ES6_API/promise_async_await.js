// get data from database when promise resolve
// don't get data from database when promise reject

// javascript promise --> resolve
// return raw data, no need to convert json formate
// const getData = new Promise(function (resolve, reject) {
//     return resolve(20);
// });

// console.log(getData);

// getData.then(data => {
//     console.log(data);
// })

// getData.then((data) => {
//     console.log(data);
// });

// javascript promise --> reject
// const getData = new Promise(function (resolve, reject) {
//     return reject("No data found!");
// });

// getData
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// promise technique apply in fetch
// promise from server use api
// fetch("https://fakestoreapi.com/products/1")
//     .then((res) => { // get response from server
//console.log(res);
//console.log(res.json());
//         res.json(); // response convert to javascript object formate(json)
//     })
//     .then((data) => {
//         console.log(data); // output raw data
//     });

// fetch("https://fakestoreapi.com/products/1")
// .then((res) => console.log(res));
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// asynchronous way fetch data
// 2 technique use:
// use asynchronous function (async() keyword)
// use await keyword --> wait for data get from server
// when promise is resolve
// const loadData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
// console.log(response);
// console.log(response.json());
// const data = response.json();
// console.log(data);
// const data = await response.json();
// console.log(data);
// };
// call the function
// loadData();

// asynchronous way
// when promise is resolve or reject
// also handle error
// const loadData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch {
//         (err) => {
//             console.log(err);
//         }
//     }
// };
// call the function
// loadData();









