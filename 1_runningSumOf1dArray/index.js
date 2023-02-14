/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
  // local storage as we iterate throught the list of numbers.
  let currentSum = 0;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    result.push(currentSum);
  }
  return result;
};