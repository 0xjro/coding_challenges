/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  // we need to get the total first in order to
  //   decrement as we iterate through. could also
  //   be named rightSum.
  let existingSum = 0;
  // could be labled as leftSum
  let startingSum = 0;
  for (let i = 0; i < nums.length; i++) {
    existingSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    existingSum -= nums[j];
    if (startingSum == existingSum) {
      return j;
    }
    startingSum += nums[j];
  }
  return -1;
};