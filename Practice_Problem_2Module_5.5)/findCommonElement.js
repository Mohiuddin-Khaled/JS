const prompt = require("prompt-sync")();

function sortArray(ar, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ar[i] > ar[j]) {
                let tmp = ar[i];
                ar[i] = ar[j];
                ar[j] = tmp;
            }
        }
    }
    return ar;
}
function findCommonElements(ar, arr) {
    const ar2 = [];
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (ar[i] === arr[j] && !ar2.includes(ar[i])) {
                ar2.push(ar[i]);
            }
        }
    }
    return ar2;
}

let n = parseInt(prompt("size of ar: "));
let ar = [];
for (let i = 0; i < n; i++) {
    ar[i] = parseInt(prompt());
}

let m = parseInt(prompt("size of arr: "));
let arr = [];
for (let j = 0; j < m; j++) {
    arr[j] = parseInt(prompt());
}

let ar1 = sortArray(ar, n);
let arr1 = sortArray(arr, m);
console.log(findCommonElements(ar1, arr1));