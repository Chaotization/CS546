/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
function checkObjectsCondition(...args){
      if(typeof args !== "object" || !args){
            throw "Error: check that input exists and is of proper type"
      }
      if(args.length < 2){
            throw "Error: there are at least two objects passed into the function"
      }
}
export let areObjectsEqual = (...args) => {
      //this function takes in a variable number of objects that's what the ...args signifies
      checkObjectsCondition(...args);
      console.log(args.keys());
      for(let i = 0; i < args.length; i++){
            
      }
      
};

export let calculateObject = (object, funcs) => {};

export let combineObjects = (...args) => {
      //this function takes in a variable number of objects that's what the ...args signifies
};
