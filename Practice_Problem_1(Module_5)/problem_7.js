const prompt = require("prompt-sync")();
// write js code here
var n = parseInt(prompt("Enter the value:"));
var arr = [];
for (var i = 0; i < n; i++) {
    arr[i] = parseInt(prompt());
}
var mx = arr[0];
for (var i = 0; i < n; i++) {
    if (mx < arr[i]) {
        mx = arr[i];
    }
}
console.log(mx);
