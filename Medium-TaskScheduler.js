// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n. Each cycle or interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.

// ​Return the minimum number of intervals required to complete all tasks.

 

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2

// Output: 8

// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// After completing task A, you must wait two cycles before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th cycle, you can do A again as 2 intervals have passed.

// Example 2:

// Input: tasks = ["A","C","A","B","D","B"], n = 1

// Output: 6

// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

// With a cooling interval of 1, you can repeat a task after just one other task.

// Example 3:

// Input: tasks = ["A","A","A", "B","B","B"], n = 3

// Output: 10

// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 

// Constraints:

// 1 <= tasks.length <= 104
// tasks[i] is an uppercase English letter.
// 0 <= n <= 100


function leastInterval(tasks, n) {
  // Count the frequency of each task
  const taskCounts = {};
  for (const task of tasks) {
      taskCounts[task] = (taskCounts[task] || 0) + 1;
  }
  
  // Get the maximum frequency
  let maxFreq = 0;
  for (const task in taskCounts) {
      maxFreq = Math.max(maxFreq, taskCounts[task]);
  }
  
  // Count the number of tasks with the maximum frequency
  let maxFreqTasks = 0;
  for (const task in taskCounts) {
      if (taskCounts[task] === maxFreq) {
          maxFreqTasks++;
      }
  }
  
  // Calculate the minimum number of intervals required
  const minIntervals = (maxFreq - 1) * (n + 1) + maxFreqTasks;
  
  // Return the maximum of calculated minimum intervals and the length of tasks array
  return Math.max(minIntervals, tasks.length);
}

// Example usage:
const tasks = ["A","A","A","B","B","B"];
const n = 2;
console.log(leastInterval(tasks, n));  // Output: 8