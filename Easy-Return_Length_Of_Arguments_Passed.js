// Write a function argumentsLength that returns the count of arguments passed to it.
 

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
 

// Constraints:

// args is a valid JSON array
// 0 <= args.length <= 100


const args = [5, "hello"];


var argumentsLength = function(...args) {
  console.log(args.length);
  return args.length;    
};

argumentsLength(...args);