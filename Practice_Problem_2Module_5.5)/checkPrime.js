const prompt = require("prompt-sync")();

function isPrime(v) {
    let flag = true;
    // corner case
    if (v == 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(v); i++) {
        if (v % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

let num = parseInt(prompt());

if (isPrime(num)) {
    console.log("prime number!");
}
else {
    console.log("is not prime number!");
}
