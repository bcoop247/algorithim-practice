const expect = (value) => {
 


  return{
    toBe: (expect) => {
      if(value === expect){
        return true
      }else throw new Error("Not Equal");
    },
    notToBe: (expect) => {
      if (value !== expect){
        return true

      }else throw new Error("Equal");
    }
    } 
  }

expect(5).toBe(5);
expect(5).notToBe(3);



// try {
//   expect(5).toBe(2); 
//   console.log("Test Passed: toBe");
// } catch (error) {
//   console.error("Test Failed: toBe -", error.message);
// }