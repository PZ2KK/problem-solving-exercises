//Optional: Palindrome Checker
function isPalindrome(word) {
   //Start Coding Here
   let reverse = word.split("").reverse().join("");
   return (reverse === word)
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false
