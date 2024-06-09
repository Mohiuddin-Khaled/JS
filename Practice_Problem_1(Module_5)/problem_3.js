const prompt = require("prompt-sync")();
// write js code
var y = parseInt(prompt("Enter the year: "));
if (y % 4 == 0) {
    console.log("february month 29 days!");
}
else {
    console.log("february month 28 days!");
}