/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

var minWindow = function (s, t) {
  if (!s || !t) return "";

  // Step 1: Store Freq of string 't' in a map
  const tFreq = new Map();
  for (let c of t) {
    const prevCount = tFreq.get(c) || 0;
    tFreq.set(c, prevCount + 1);
  }
  let ans = "";
  let left = 0;
  const need = tFreq.size;
  let have = 0;

  // Step 2: Create Freq of string 's' in a map of window size which is [left....right]
  const sFreq = new Map();
  for (let right = 0; right < s.length; right++) {
    let c = s[right];
    if (!tFreq.has(c)) continue;
    const prevCount = sFreq.get(c) || 0;
    sFreq.set(c, prevCount + 1);

    if (sFreq.get(c) == tFreq.get(c)) have++;

    // When the S contains T
    while (have == need) {
      const currSubstr = s.substring(left, right + 1);
      if (currSubstr.length < ans.length || !ans) {
        ans = currSubstr;
      }
      const leftChar = s[left];
      if (tFreq.has(leftChar)) {
        const prevCount = sFreq.get(leftChar);
        sFreq.set(leftChar, prevCount - 1);
        if (sFreq.get(leftChar) < tFreq.get(leftChar)) have--;
      }
      left++;
    }
  }
  return ans;
};
