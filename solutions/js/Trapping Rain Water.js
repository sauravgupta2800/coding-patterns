/**
 * @param {number[]} height
 * @return {number}
 */

/*
 Complexities
 Time - O(n) | Space - O(n)
*/

var trap = function (height) {
  const N = height.length;
  const Lmax = new Array(N);
  const Rmax = new Array(N);

  //step1: to find left max values
  Lmax[0] = height[0];
  for (let i = 1; i < N; i++) {
    Lmax[i] = height[i] > Lmax[i - 1] ? height[i] : Lmax[i - 1];
  }

  //step2: to find out right max values
  Rmax[N - 1] = height[N - 1];
  for (i = N - 2; i >= 0; i--) {
    Rmax[i] = height[i] > Rmax[i + 1] ? height[i] : Rmax[i + 1];
  }

  //step3: sum of all the min(L,R)-height[i]
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Math.min(Lmax[i], Rmax[i]) - height[i];
  }
  return sum;
};
