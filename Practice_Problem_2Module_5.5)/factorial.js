const prompt = require("prompt-sync")();

let val = 1;
let n = parseInt(prompt());
if (n < 0) {
    console.log("Invalid!");
}
else if (n == 0 || n == 1) {
    console.log(val);
}
else {
    for (let i = 2; i <= n; i++) {
        val *= i;
    }
    console.log(val);
}
