const prompt = require("prompt-sync")();

let arr = [];
function filterEven(ar, n) {
    for (let i = 0; i < n; i++) {
        if (ar[i] % 2 == 0) {
            arr.push(ar[i]);
        }
    }
    return arr;
}

let n = parseInt(prompt());
let ar = [];
for (let i = 0; i < n; i++) {
    ar[i] = parseInt(prompt());
}
console.log(filterEven(ar, n));