const prompt = require("prompt-sync")();
// write js code
var n = parseInt(prompt("Enter the value: "));

for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}