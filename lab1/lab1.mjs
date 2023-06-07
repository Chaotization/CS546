export const questionOne = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += Math.pow(element, 3);
    });
    let isPrime = true
    if(sum <= 1) return false;
    for(let i = 2; i < sum; i++){
        if(sum % i === 0) {
            isPrime = false;
            break;
        }
    }
    return {[sum]: isPrime};
};

export const questionTwo = (numArray) => {
    let isSorted = true
    let prev, res;
    for(let i = 0; i < numArray.length; i++){
        if(prev > numArray[i]){
            isSorted = false;
            res = [isSorted, i - 1, i];
            break;
        }
        prev = numArray[i];
        res = [isSorted];
    }
    return res;
};

export const questionThree = (obj1, obj2) => {
    let res = {};
    for(let key in obj1){
        res[key] = obj2.hasOwnProperty(key);
    }
    for(let key in obj2){
        if(!res.hasOwnProperty(key)){
            res[key] = false;
        }
    }
    return res;
};

export const questionFour = (string) => {
    let res = [];
    string = string.split('\n');
    for(let i = 0; i < string.length; i++){
        res[i] = string[i].split(',');
    }
    return res
};

export const studentInfo = {
    firstName: 'Chao',
    lastName: 'Zheng    ',
    studentId: '20017348'
};
