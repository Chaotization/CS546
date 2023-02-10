/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
function checkConditions(array, sortBy1, sortBy2, filterBy, filterByTerm) {
    if (array === undefined || !array ) {
        throw "Error: the array does not exist";
    }
    if(!Array.isArray(array) || array.length === 0){
        throw "Error: the input is not an array";
    }
    if (array.length < 2) {
        throw "Error: array should contain at least two elements";
    }
    array.map(elem => {
        if (typeof elem !== "object" || elem.length === 0) {
            throw "Error: each element in the array must be an object";
        }
        if (!Object.keys(array[0]).every(key => Object.keys(elem).includes(key))) {
            throw "Error: element in the array does not have the same keys";
        }
        if (!Object.values(elem).every(value => typeof value === "string" && value.trim().length !== 0)) {
            throw "Error: type of value of each element should be string and not empty";
        }
    })
    if (!sortBy1 || sortBy1.length !== 2) {
        console.log(sortBy1);
        throw "Error: sortBy1 does not exist or its length does not equal to two";
    }
    if (!Object.keys(array[0]).includes(sortBy1[0]) || typeof sortBy1[0] != "string") {
        throw "Error: the sortByField1 is not a key in each object of the array";
    }
    if (typeof sortBy1[1] !== "string" || !["asc", "desc"].includes(sortBy1[1].trim().toLowerCase())) {
        throw "Error: the order of sortByField1 must be either 'asc' or 'desc'";
    }
    if (!sortBy2 || sortBy2.length !== 2) {
        throw "Error: sortBy2 does not exist or its length does not equal to two";
    }

    if (!Object.keys(array[0]).includes(sortBy2[0]) || typeof sortBy2[0] != "string") {
        throw "Error: the sortByField2 is not a key in each object of the array";
    }

    if (typeof sortBy2[1] !== "string" || !["asc", "desc"].includes(sortBy2[1].trim().toLowerCase())) {
        throw "Error: the order of sortByField2 must be either 'asc' or 'desc'";
    }
    if (!Object.keys(array[0]).includes(filterBy)) {
        throw "Error: the filterBy key is not a key in each object of the array";
    }
    if(typeof filterByTerm !== "string" || filterByTerm.trim().length === 0){
        throw "Error: the filterByTerm must be a string or the length cannot be zero";
    }
    if(!array.some(item => Object.values(item).includes(filterByTerm))){
        throw "Error: at least one object needed";
    }
}
function checkArrayCondition(...args){
    if(args.length < 1 || !args.map(elem => elem.length < 1)){
        throw "Error: at least one array or one element is required"
    }
    if(!Array.isArray(args)){
        throw "Error: the input must be an array"
    }
    args = args.flat(Infinity).map(item => {
        if(typeof item !== "string" && typeof item !== "number"){
            throw "Error: array element is either a string,  number or an array that has either strings or numbers as elements"
        }
    })

}
function checkMatricesInput(...args){
    if(args.length < 2) throw "Error: at least two inputs";
    let index = 1
    args.map(item =>{
        let len = item[0].length;
        if(index >= args.length &&(!Array.isArray(item) || !Array.isArray(args[index]) ||
            item.length === 0 || args[index][0].length === 0)){

            throw "Error: input is not an array or array is empty";
        }
        if(index >= args.length && item[0].length !== args[index].length){
            throw "Error: the determinant does not exist"
        }
        Object.values(item).every(value => {
            if (!value.every(innerItem => typeof innerItem === "number")|| value.length !== len){
                throw "Error:  inner arrays must only have numbers as elements or inner array is of the same length";
            }
        })
    })
}
export let sortAndFilter = (array, sortBy1, sortBy2, filterBy, filterByTerm) => {
    checkConditions(array, sortBy1, sortBy2, filterBy, filterByTerm);
    let filteredArray = array.filter(item => item[filterBy] === filterByTerm);
    return filteredArray.sort((a, b) => {
        if (a[sortBy1[0]] === b[sortBy1[0]]) {
            return sortBy2[1].toLowerCase() === "asc" ? a[sortBy2[0]].localeCompare(b[sortBy2[0]]) : b[sortBy2[0]].localeCompare(a[sortBy2[0]]);
        } else {
            return sortBy1[1].toLowerCase() === "asc" ? a[sortBy1[0]].localeCompare(b[sortBy1[0]]) : b[sortBy1[0]].localeCompare(a[sortBy1[0]]);
        }
    });
 }

export let merge = (...args) => {
    //this function takes in a variable number of arrays that's what the ...args signifies
    checkArrayCondition(...args);
    return args.flat(Infinity).sort((a, b) => {
        if(typeof a === "number"){
            return typeof b === "number" ? a - b : -1;
        }else{
            return typeof b === "number" ? 1 : a.localeCompare(b);
        }
    })
}

export let matrixMultiply = (...args) => {
     //this function takes in a variable number of arrays that's what the ...args signifies
    checkMatricesInput(...args);
    let res = args[0];
    for(let i = 1 ; i < args.length; i++){
        let m = res, n = args[i];
        res = [];
        for(let j = 0; j < m.length; j++){
            res[j] = Array(n[0].length).fill(0);
            for(let k = 0; k < n[0].length; k++){
                for(let l = 0; l < n.length; l++){
                    res[j][k] += m[j][l] * n[l][k];
                }
            }
        }
    }
    return res;
};

