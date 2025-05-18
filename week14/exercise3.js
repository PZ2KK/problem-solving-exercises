//Exercise 3: Find Max Number
function findMax(nums) {
  //Start Coding Here
  let result = nums[0];
  for (let num of nums) {
    if (num > result) {
      result = num;
    }
  }
  return result;
}

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2
