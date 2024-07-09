const prompt = require("prompt-sync")();

function sumOfArray(ar, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += ar[i];
    }
    return sum;
}

let n = parseInt(prompt());
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = parseInt(prompt());
}
console.log(sumOfArray(arr, n));