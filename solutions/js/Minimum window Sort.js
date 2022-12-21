/**
 * @param {number[]} nums
 * @return {number}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

var findUnsortedSubarray = function (nums) {
  const N = nums.length;
  let left = 0,
    right = N - 1;
  let distance = 0;

  //step1: move left & right pointers
  while (left < N && nums[left + 1] >= nums[left]) {
    left++;
  }
  while (right >= 0 && nums[right - 1] <= nums[right]) {
    right--;
  }

  if (left < right) {
    //step2: find min & max in range[left, right]
    let minEl = nums[left];
    let maxEl = nums[left];

    for (let i = left; i <= right; i++) {
      minEl = Math.min(minEl, nums[i]);
      maxEl = Math.max(maxEl, nums[i]);
    }

    //step3: fixing left & right pointers based upon min & max values
    while (left >= 0 && nums[left] > minEl) {
      left--;
    }
    while (right < N && nums[right] < maxEl) {
      right++;
    }

    distance = right - left - 1;
  }
  return distance;
};
