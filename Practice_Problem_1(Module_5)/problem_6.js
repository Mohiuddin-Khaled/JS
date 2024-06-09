const prompt = require("prompt-sync")();
// write js code here
var n = parseInt(prompt("Enter the value:"));
var numbers = new Array(n);
for (var i = 0; i < n; i++) {
    numbers[i] = parseInt(prompt());
}

// sorted array
for (var x = 0; x < n - 1; x++) {
    for (var y = x + 1; y < n; y++) {
        if (numbers[x] > numbers[y]) {
            var tmp = numbers[x];
            numbers[x] = numbers[y];
            numbers[y] = tmp;
        }
    }
}

var i, j, k;
for (i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
        if (numbers[i] == numbers[j]) {
            for (k = j; k < n - 1; k++) {
                numbers[k] = numbers[k + 1];
            }
            n--;
            j--;
        }
    }
}
// n size resized but array length not resized  
numbers.length = n;
console.log(numbers);
