/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const second = target - first;

    if (map.has(second)) {
      return [i, map.get(second)];
    }
    map.set(first, i);
  }
};
