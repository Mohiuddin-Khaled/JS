// array and object specific value set in individual variable

// technique - 1 array destructuring [ ]
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const [first, second] = numbers;
// console.log(first);
// console.log(second);
// console.log(first, second);
// const [first, second, a, b] = numbers;
// console.log(first);
// console.log(b);
// const [second, a, first, b] = numbers;
// console.log(second, a, b);
// const [a, b, c, d, e, f, g] = numbers;
// console.log(a, b, c, d, e, f, g);

// technique-2 object destructuring { }
// const obj = {
//     name: "gias",
//     age: 30,
//     github: "yes",
//     m_status: "single",
// };
// object destructuring
// const { age } = obj;
// console.log(age);
// const { name, age, github, m_status } = obj;
// console.log(age, m_status);

// technique-3 object destructuring
// specific value from object assign in new variable
// const age = obj.age;
// console.log(age);

// technique-4 nested object(array in object/ object in object/ object in array/ array in array)
// array is one type of object
// object in array
// const test = [{
//     name: "gias",
//     age: 30,
//     friends: "10",
//     github: "yes",
// }, {}, {},
// ];
// check array element
// console.log(test.length);
// const [a, b, c] = test;
// console.log(a);

// const test2 = [
//     {
//         name: "akash",
//         age: 30,
//         friends: ["rahim", "karim"],
//     },
//     {}, {},
// ];
// console.log(test2);
// console.log(test2[0].friends[0]);

// const test3 = [
//     {
//         name: "akash",
//         age: 30,
//         friends: ["Rahim", "Karim", {
//             name: "hey",
//         }],
//     },
//     {}, {},
// ];
// console.log(test3[0].friends[2]);
// console.log(test3[0].friends[2].name);

