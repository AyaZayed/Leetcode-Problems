// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Example:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
  let resultArray = [];
  resultArray.push(nums[0]);
  for (let i = 0; i < nums.length - 1; i++) {
    resultArray.push(nums[i + 1] + resultArray[i]);
  }
  return resultArray;
};

console.log(runningSum([1, 2, 3, 4]));
