/* Todo: Implment any helper functions below 
    and then export them for use in your other files.
*/
import {sortAndFilter, merge, matrixMultiply} from "./arrayUtils.js"
import {palindromes, censorWords, distance} from "./stringUtils.js"
import{checkObjectsCondition, areObjectsEqual, calculateObject, combineObjects} from "./objectUtils"
    //Question 1 in arrayUtils
// let people = [
//     {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'},
//     {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
//     {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'},
//     {name: 'Greg', age: '22', location: 'New York', role: 'Student'},
//     {name: 'Mike', age: '21', location: 'Chicago', role: 'Teacher'} ];
// console.log(sortAndFilter(people, ['name', 'asc'], ['location', 'asc'], 'role', 'Student'));
// console.log(sortAndFilter(people, ['name', 'asc'], ['location', 'desc'], 'role', 'Student'));
//console.log(sortAndFilter(people, ['location', 'asc'], ['name', 'asc'], 'age', '22'));
//console.log(sortAndFilter(people, ['ssn', 'asc'], ['name', 'asc'], 'age', '22'));
//console.log(sortAndFilter(people, ['location', 'none'], ['name', 'asc'], 'age', '22'));
//console.log(sortAndFilter(people, ['location', 'asc'], ['name', 'asc'], 'phone', '22'));
//console.log(sortAndFilter(['location', 'asc'], ['name', 'asc'], 'age', '22'));
//console.log(sortAndFilter(['string', {}], ['location', 'asc'], ['name', 'asc'], 'age', '22'));
//console.log(sortAndFilter(people, ['location', 'asc'], ['name', 'asc'], 'age', 22));
//console.log(sortAndFilter([ {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}, {name: 'Greg', age: 22, location: 'New York', role: 'Student'}], 'location', 'age',

    //Question 2 in arrayUtils
// console.log(merge([3,0,1,2,4], [1,2,8,15], [6,3,10,25,29]));
// console.log(merge([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], [6,3,"Patrick",25,29]))
// console.log(merge([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], [6,3,"!Patrick",25,29]))
// console.log(merge(["bar", 0, 1, [[[5, "foo"]]]], [7, "buzz", ["fizz", 8]]))
    //Question 3 in arrayUtils
// console.log(matrixMultiply([ [2,3], [3,4], [4,5] ], [ [1,1,1], [2,2,2] ], [ [3], [2], [1] ]));
// console.log(matrixMultiply([ [3,5] ], [ [4], [4] ]))
// console.log(matrixMultiply([]));
// console.log(matrixMultiply([ [1,2], [3,3] ]))
// console.log(matrixMultiply([ [1,2] ], [ ['foobar'], [6] ]) )

    //Question 1 in stringUtils
// console.log(palindromes(["Madam", "Loot", "Was it a cat I saw?", "Poor Dan is in a droop", "Anna", "Nope" ]));
// console.log(palindromes());
// console.log(palindromes("hi"));
// console.log(palindromes("    "));
// console.log(palindromes(1));
    //Question 2 in stringUtils
// let badWords = ["bread", "chocolate", "pop"];
// console.log(censorWords("I like bread that has chocolate chips in it but I do not like lollipops", badWords))
// console.log(censorWords("     ", badWords));
// console.log(censorWords("I like bread that has chocolate chips in it", [2, "wow"]))

    //Question 3 in stringUtils
// console.log(distance());
// console.log(distance([],true));
//console.log(distance("","",""));
//console.log(distance("Hello World!", "   !?!", "    ...  "));
//console.log(distance("Patrick", "Patrick", "Patrick"));
//console.log(distance(123, "CS", "Patrick"));
//console.log(distance("Hello there", "hello", ""));
// console.log(distance("Give me music suggestions", "rock", "pop"));
// console.log(distance("Bob met Adam on wednesday", "Adam", "Bob"));
//console.log(distance("I was going to buy preworkout powder yesterday", "going to", "workout powder");
// console.log(distance("The brown fox jumped over the lazy dog", "fox", "dog"));
// console.log(distance("I was going to buy workout powder yesterday", "going to", "workout powder"));
// console.log(distance("sphinx of black quartz, judge my vow", "QUARTZ", "vOW"));
// console.log(distance("I really hope it will snow soon because I like snow", "I", "snow"));
// console.log(distance("I like sweet and salty but I like sweet more", "salty", "sweet"));

    //Question 1 in objectUtils
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"};
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
const sixth = {name: {firstName: "Patrick", lastName: "Hill"}, age: 47, dob: '9/25/1975', hobbies: ["Playing music", "Movies", "Spending time with family"]};
const seventh = {age: 47, name: {firstName: "Patrick", lastName: "Hill"}, hobbies: ["Playing music", "Movies", "Spending time with family"], dob: '9/25/1975'};
const eighth = {b:3, a:2};
console.log(areObjectsEqual(first, second));
