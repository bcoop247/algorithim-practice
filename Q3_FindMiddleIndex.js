// 1991. Find the Middle Index in Array

// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.


var findMiddleIndex = function(nums) {
  for (let middleIndex = 0; middleIndex < nums.length; middleIndex++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < middleIndex; i++) {
      leftSum += nums[i];
    }

    for (let i = middleIndex + 1; i < nums.length; i++) {
      rightSum += nums[i];
    }

    if (leftSum === rightSum) {
      return middleIndex;
    }
  }

  return -1; // If there's no middleIndex that satisfies the condition
};

const nums = [2, 5];
const result = findMiddleIndex(nums);
console.log(result);
//node q3_findmiddleindex.js
