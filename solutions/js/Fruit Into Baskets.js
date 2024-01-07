/**
 * @param {number[]} fruits
 * @return {number}
 */

/*
 Complexities
 Time - O(n) | Space - O(1)
*/

var totalFruit = function (fruits) {
  let fruit1 = -1,
    count1 = 0;
  let fruit2 = -1,
    count2 = 0;
  let left = 0;
  let maxWindowSize = 0;
  for (let right = 0; right < fruits.length; right++) {
    let fruitAtRight = fruits[right];
    if (count1 == 0 && fruitAtRight !== fruit2) {
      // Initialise Fruit 1
      count1 = 1;
      fruit1 = fruitAtRight;
    } else if (count2 == 0 && fruitAtRight !== fruit1) {
      // Initialise Fruit 2
      count2 = 1;
      fruit2 = fruitAtRight;
    } else if (fruitAtRight == fruit1) {
      // Increment Fruit 1
      count1++;
    } else if (fruitAtRight == fruit2) {
      // Increment Fruit 2
      count2++;
    } else {
      // 3rd Type
      while (count1 && count2) {
        let fruitAtLeft = fruits[left];
        if (fruitAtLeft == fruit1) {
          count1--;
        } else {
          count2--;
        }
        left++;
      }
      if (count1 == 0) {
        count1 = 1;
        fruit1 = fruitAtRight;
      } else {
        // count2 is 0
        count2 = 1;
        fruit2 = fruitAtRight;
      }
    }
    let windowSize = right - left + 1;
    maxWindowSize = Math.max(maxWindowSize, windowSize);
  }
  return maxWindowSize;
};
