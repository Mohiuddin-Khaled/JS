const prompt = require("prompt-sync")(); n
var n = parseInt(prompt("Enter the size: "));

var ar = [];

for (var i = 0; i < n; i++) {
    ar[i] = parseInt(prompt());
}

// way 01 ascending sort
// console.log(
//     ar.sort(function (a, b) {
//         return a - b;
//     })
// );

// way 02 descending sort
// console.log(
//     ar.sort(function (a, b) {
//         return b - a;
//     })
// );

// way 03 ascending sort
// for (var i = 0; i < n; i++) {
//     for (var j = 0; j < n - 1; j++) {
//         if (ar[i] > ar[j]) {
//             tmp = ar[i];
//             ar[i] = ar[j];
//             ar[j] = tmp;
//         }
//     }
// }
// console.log(ar);

// way 04 descending sort
for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n; j++) {
        if (ar[i] < ar[j]) {
            tmp = ar[i];
            ar[i] = ar[j];
            ar[j] = tmp;
        }
        console.log(i, j);
    }
}
console.log(ar);