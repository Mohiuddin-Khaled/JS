const prompt = require("prompt-sync")();
function checkPalindrome(str) {
    let flag = 1;
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            flag = 0;
        }
    }
    return flag;
}
let str = prompt();
// console.log(str);
str = str.toLowerCase();
// console.log(str);
(checkPalindrome(str)) ? console.log("Palindrome") : console.log("Not Palindrome");