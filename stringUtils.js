/* Todo: Implment the functions below and then export them
      using the ES6 exports syntax. 
      DO NOT CHANGE THE FUNCTION NAMES
*/
function checkArray(string){
    if(!Array.isArray(string) || string.length === 0 || !string){
        throw "Error: check the array exists or the proper type or is not empty"
    }
    string.every(item =>{
        if(typeof item !== "string" || !item || !item.trim().length ||
            item.replace(/[^a-zA-Z0-9]/g, "").length){
            throw "Error: check either element in the array is not string or element is empty" +
                "or element only consist with whitespace or element needed at least one alphanumeric character"
        }
    })
}

function checkStringCondition(string, badWordsList){
    if(typeof string !== "string" || string.trim().length === 0){
        throw "Error: check string exists and it a string"
    }
    if(!Array.isArray(badWordsList) || badWordsList.length === 0){
        throw "Error: check bad words list exists and is an array"
    }
    badWordsList.every(item =>{
        if(typeof item !== "string" || item.length === 0 || string.indexOf(item) === 0){
            throw "Error: each element in the bad words list is a string or " +
                "element in the bad words list must exist in the input string"
        }
    })
}
function checkWordsCondition(string, word1, word2){
    if(typeof string !== "string" || typeof word1 !== "string" || typeof word2 !== "string"){
        throw "Error: check that string, word1, and word2 are of type string"
    }
    if(string.trim().length  === 0 || word1.trim().length === 0 || word2.trim().length === 0){
        throw "Error: check that string, word1, and word2 are not just empty strings"
    }
    if(string.replace(/[^a-zA-Z0-9]/g, "").length === 0 ||
        word1.replace(/[^a-zA-Z0-9]/g, "").length === 0 ||
        word2.replace(/[^a-zA-Z0-9]/g, "").length === 0){
        throw "Error: That string, word1, and word2 are not just strings made of punctuation symbols"
    }
    if(string.split(" ").length < 2){
        throw "Error: That string is at least two words long"
    }
    if(word1 === word2){
        throw "Error: That word1 and word2 are not the same";
    }
    if(word1.split(" ").length > 1 || word2.split(" ").length > 1){
        if((word1.split(" ").map(item => string.split(" ").indexOf(item)) ||
            word2.split(" ").map(item => string.split(" ").indexOf(item))) < 0){
            throw "Error: That word1 and word2 exist in the string"
        }
    }else
        if((string.split(" ").indexOf(word1) || string.split(" ").indexOf(word2)) < 0){
        throw "Error: That word1 and word2 exist in the string"
    }
    if(string.split(" ").indexOf(word1) > string.split(" ").indexOf(word2)){
        throw "Error: That word1 appears before word2 in the string"
    }
}
export let palindromes = (string) => {
    checkArray(string);
    let res = {};
    string.map(item =>{
        res[item] = (item.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() ===
            (item.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().reverse()));
    })
    return res;
};

export let censorWords = (string, badWordsList) => {
    checkStringCondition(string, badWordsList);
    let symbols = ["!", "@", "$", "#"];
    let index = 0;
    badWordsList.forEach(item =>{
        if(string.indexOf(item) >= 0){
            let str = item.split("").map(() => symbols[index++ % 4]).join("");
            string = string.replace(item, str);
        }
    })
    return string;
};

export let distance = (string, word1, word2) => {
    checkWordsCondition(string, word1, word2);
    // if(word1.split(" ").length > 1 || word2.split(" ").length > 1){
    //     return string.toLowerCase().split(" ").indexOf(word2.split(" ")[0].toLowerCase()) -
    //         string.toLowerCase().split(" ").indexOf(word1.split(" ")[1].toLowerCase());
    // }else {
    //     return string.toLowerCase().split(" ").indexOf(word2.toLowerCase()) -
    //         string.toLowerCase().split(" ").indexOf(word1.toLowerCase());
    // }
    let index1 = string.toLowerCase().split(" ").indexOf(word1.toLowerCase().split(" "));
    let index2 = string.toLowerCase().split(" ").indexOf(word2.toLowerCase());

    return index2 - index1;
};
