const prompt = require("prompt-sync")();
// var use global, let use scope, const use constant
function maxValue(arr, n) {
    let mx = 0;
    for (let i = 0; i < n; i++) {
        if (mx < arr[i]) {
            mx = arr[i];
        }
    }
    return mx;
}

let n = parseInt(prompt());
let ar = [];
for (let i = 0; i < n; i++) {
    ar[i] = parseInt(prompt());
}

console.log(maxValue(ar, n));
