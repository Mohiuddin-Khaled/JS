const prompt = require("prompt-sync")();
// JavaScript code
var num = parseInt(prompt("Enter the number: "));
if (num % 2 == 0) {
    console.log("even!");
}
else {
    console.log("odd!");
}