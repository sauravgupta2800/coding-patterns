/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
 Complexities
 Time - O(n) | Space - O(n)
*/

var sortedSquares = function (nums) {
  let N = nums.length;
  const ans = new Array(N);
  let left = 0;
  let right = N - 1;

  while (left <= right) {
    const sqLeft = nums[left] * nums[left];
    const sqRight = nums[right] * nums[right];

    if (sqLeft >= sqRight) {
      ans[N - 1] = sqLeft;
      left++;
    } else {
      ans[N - 1] = sqRight;
      right--;
    }
    N--;
  }

  return ans;
};
