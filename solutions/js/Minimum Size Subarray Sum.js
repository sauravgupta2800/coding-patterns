/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

var minSubArrayLen = function (target, nums) {
  const N = nums.length;
  let left = 0,
    right = 0;
  let minLength = Number.MAX_VALUE;
  let sum = 0;
  while (right < N) {
    sum += nums[right];
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++;
  }

  return minLength === Number.MAX_VALUE ? 0 : minLength;
};
