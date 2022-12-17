/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
 Complexities
 Time - O(n^2) | Space - O(1)
*/

var threeSum = function (nums) {
  const N = nums.length;
  const ans = []; //will hold all the triplets

  nums.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let start = i + 1;
    let end = N - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum > 0) end--;
      else if (sum < 0) start++;
      else {
        // sum == 0
        ans.push([nums[i], nums[start], nums[end]]);
        start++;
        while (nums[start] === nums[start - 1] && start < end) start++;
        end--;
      }
    }
  }
  return ans;
};
