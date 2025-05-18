//Exercise 2: Reverse String

function reverseString(text) {
  //Start Coding Here
  if (text.length === 0 || text.length === 1) {
    return "text must be atleast 2 length to be able to reverse";
  }
  return text.split("").reverse().join("");
}

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"

let result3 = reverseString("T");
console.log(result3); // "text must be atleast 2 length to be able to reverse"

let result4 = reverseString("Tt11");
console.log(result4); // "11tT"
