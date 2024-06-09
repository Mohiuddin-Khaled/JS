// javascript object
var person = {
    hands: 2,
    friends: 5,
    age: 24,
    // object in object
    college: {
        name: "pkfsc",
        location: "raipur",
    },
};
// key and value print
// console.log(person);
// key print
// console.log(Object.keys(person));
// value print
// console.log(Object.values(person));
// key and value entries
// console.log(Object.entries(person));
// print specific value print
// console.log(person.age);
//object in object print
// console.log(person.college);
//object in object specific value print
console.log(person.college.location);