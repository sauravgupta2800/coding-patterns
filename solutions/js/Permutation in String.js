/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/*
 Complexities
 Time - O(s1 + s2) | Space - O(s1 + s2)
*/

var checkInclusion = function (s1, s2) {
  // write your code here
  const map1 = new Map();
  for (let c of s1) {
    let prevCount = map1.get(c) || 0;
    map1.set(c, prevCount + 1);
  }

  let left = 0;
  const map2 = new Map();
  for (let right = 0; right < s2.length; right++) {
    const c = s2[right];
    map2.set(c, (map2.get(c) || 0) + 1);
    while (map2.get(c) > (map1.get(c) || 0)) {
      map2.set(s2[left], map2.get(s2[left]) - 1);
      left++;
    }
    if (right - left + 1 == s1.length) return true;
  }
  return false;
};
