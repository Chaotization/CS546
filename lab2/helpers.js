/* Todo: Implment any helper functions below 
    and then export them for use in your other files.
*/
export let helper = (obj1, obj2) => {
    let key1 = Object.keys(obj1);
    if(key1.length !== Object.keys(obj2).length) return false;
    return key1.every(key => typeof obj1[key] === "object" && typeof obj2[key] === "object" ?
                        helper(obj1[key], obj2[key]) : obj1[key] === obj2[key]);
}