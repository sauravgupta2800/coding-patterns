/**
 * @param {string} s
 * @return {number}
 */

/*
 Complexities
 Time - O(len(s)) | Space - O(len(s))
*/

var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    if (!set.has(c)) set.add(c);
    else {
      while (s[left] !== s[right]) {
        set.delete(s[left]);
        left++;
      }
      left++;
    }
    maxLen = Math.max(maxLen, set.size);
  }
  return maxLen;
};
