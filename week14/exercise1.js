//Exercise 1: Is Even Number

function isEvenNumber(num) {
  //Start Coding Here
  if (typeof num !== "number") {
    return "input is not a number";
  }
  return (num % 2 === 0);
}

let result1 = isEvenNumber(4);
console.log(result1); // true

let result2 = isEvenNumber(7);
console.log(result2); // false

let result3 = isEvenNumber("text");
console.log(result3); // false
