let prompt = require("prompt-sync")();

// selection sort
function SortArray(ar1, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (ar1[i] > ar1[j]) {
                let tmp = ar1[i];
                ar1[i] = ar1[j];
                ar1[j] = tmp;
            }
        }
    }
    return ar1;
}

function removeDuplicate(arr, n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let value = false;
        for (let j = 0; j < array.length; j++) {
            if (arr[i] == array[j]) {
                value = true;
            }
        }
        if (!value) {
            array.push(ar[i]);
        }
    }
    return array;
}

let n = parseInt(prompt());
let ar = [];
for (let i = 0; i < n; i++) {
    ar[i] = parseInt(prompt());
}
console.log(SortArray(removeDuplicate(ar, n), n));