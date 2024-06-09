const prompt = require("prompt-sync")();
// write js code here
// way 1
// var n = parseInt(prompt("Enter the value: "));
// var arr = [];
// for (var i = 0; i < n; i++) {
//     arr[i] = prompt();
// }
// var len = 0;
// var str;
// for (var i = 0; i < n; i++) {
//     if (arr[i].length > len) {
//         len = arr[i].length;
//         str = arr[i];
//     }
// }
// console.log("output:", str);

// way 2
var n = parseInt(prompt("Enter the value: "));
var arr = [];
for (var i = 0; i < n; i++) {
    arr[i] = prompt();
}

var largeStr = arr[0];
for (var i = 0; i < n; i++) {
    var str = arr[i];
    if (str.length > largeStr.length) {
        largeStr = str;
    }
}
console.log(largeStr);