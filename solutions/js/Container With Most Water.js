/**
 * @param {number[]} height
 * @return {number}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left <= right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
