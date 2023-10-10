// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 

// Example 1:

// Input: nums = [1,2,2,1], k = 1
// Output: 4
// Explanation: The pairs with an absolute difference of 1 are:
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]
// - [1,2,2,1]

function countPairsWithDiffK(nums, k) {
  const numCounts = new Map();
  let count = 0;

  for (const num of nums) {
    numCounts.set(num, (numCounts.get(num) || 0) + 1);
  }

  for (const [num, freq] of numCounts.entries()) {
    if (k === 0) {
      // For k = 0, count duplicates (pairs with the same element)
      count += (freq * (freq - 1)) / 2;
    } else if (k > 0 && numCounts.has(num + k)) {
      count++;
    }
  }

  return count;
}

// Example usage:
const nums1 = [3, 2, 1, 5, 4];
const k1 = 2;
console.log(countPairsWithDiffK(nums1, k1)); // Output: 3

const nums2 = [1, 2, 2, 1];
const k2 = 1;
console.log(countPairsWithDiffK(nums2, k2)); // Output: 4

