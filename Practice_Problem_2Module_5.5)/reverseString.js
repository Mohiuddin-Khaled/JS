const prompt = require("prompt-sync")();

function reverseStr(str) {
    // Convert the string into an array of characters
    str = str.split('');
    // string length
    let n = str.length;
    // Two's pointer technique
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        // Swap the characters
        let tmp = str[i];
        str[i] = str[j];
        str[j] = tmp;
    }
    return str.join('');
}

// Prompt the user for input
let st = prompt();
console.log(reverseStr(st));

