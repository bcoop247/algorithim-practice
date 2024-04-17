var map = function(arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++){
    result.push(fn(arr[i], i));
       
}
return result;
  
};

// TEST CASE 1
//  var arr = [1,2,3]; 
//  var fn = function plusone(n) { 
//   return n + 1; 
// }

// TEST CASE 2
var arr = [1,2,3]; 
var fn = function plusI(n, i) {
   return n + i; 
}
// Explanation: The function increases each value by the index it resides in.


// CALL FUNCTION
let result = map(arr, fn);
console.log(result);
