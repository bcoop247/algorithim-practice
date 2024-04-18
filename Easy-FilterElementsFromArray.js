var filter = function(arr, fn) {
  const filteredArr = [];

  for(let i = 0; i < arr.length; i++){
    if ( fn(arr[i], i)){
      filteredArr.push(arr[i]);
    }    
  }
  return filteredArr;
  
};


// TEST CASE 1
// var arr = [0,10,20,30]; 
// var fn = function greaterThan10(n) {
//    return n > 10; 
//   };

//TEST CASE 2
// const arr = [1,2,3]; 
// const fn = function firstIndex(n, i) {
//    return i === 0; 
//   }

var arr = [-2,-1,0,1,2];
const  fn = function plusOne(n) {
   return n + 1 
  };


  const newArr = filter(arr, fn);
  console.log(newArr);