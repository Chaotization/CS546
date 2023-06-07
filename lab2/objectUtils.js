/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
import {helper} from "./helpers.js";

function checkObjectsCondition(...args){
    if(typeof args !== "object" || !args){
        throw "Error: check that input exists"
    }
    args.map(item => {
        if(typeof item !== "object" || Array.isArray(item)){
            throw "Error: check the proper type"
        }
    })

    if(args.length < 2){
        throw "Error: there are at least two objects passed into the function";
    }
}
function checkInputCondition(object, funcs){
    if(typeof object !== "object" || !object){
        throw "Error: the object exists and is of proper type"
    }
    if(!funcs || !Array.isArray(funcs)){
        throw "Error: that funcs exists and is of proper type (an array)."
    }
    if(!Object.entries(object).every(([key,value]) => typeof value === "number")){
        throw "Error: that the object values are all numbers"
    }
    if(funcs.length < 1 || !funcs.every(item=> typeof item === "function")){
        throw "Error: that the funcs array has at least one element and that the elements are of proper type"
    }
}
function checkConditions(...args){
    if(args.length < 2){
        throw "Error: That args has at least two objects"
    }
    Object.entries(args).map(([key, val])=> {
        if(typeof val !== "object" || val.length < 1){
            throw "Error: That each object in args is of proper type (an object) or has at least 1 key"
        }
    })
}
export let areObjectsEqual = (...args) => {
      //this function takes in a variable number of objects that's what the ...args signifies
    checkObjectsCondition(...args);
    let res;
    for(let i = 0; i < args.length; i++){
        if(i < args.length - 1) {
            res = helper(args[i], args[i + 1]);
        }
    }
    return res;
};

export let calculateObject = (object, funcs) => {
    checkInputCondition(object, funcs);
    let res = object;
    for(let i = 0; i < funcs.length; i++) {
        for (let key in object) {
            res[key] = funcs[i](res[key]).toFixed(2);
        }
    }
    return res;
};

export let combineObjects = (...args) => {
    //this function takes in a variable number of objects that's what the ...args signifies
    checkConditions(...args);
    let res = {};
    for (let i = 0; i < args.length; i++) {
        for (let key in args[i]) {
            if (Object.values(args.slice(i + 1)).some(obj => obj.hasOwnProperty(key))) {
                if (!(key in res)) {
                    res[key] = args[i][key];
                }
            }
        }
    }
    return res;
};
