/* TODO: Import the functions from your three modules here and write two test cases for each function.. You should have a total of 18 test cases. 
do not forget that you need to create the package.json and add the start command to run app.js as the starting script*/
import {sortAndFilter, merge, matrixMultiply} from "./arrayUtils.js"
import {palindromes, censorWords, distance} from "./stringUtils.js"
import{areObjectsEqual, calculateObject, combineObjects} from "./objectUtils.js"
//Question 1 in arrayUtils
let people = [
    {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'},
    {name: 'Matt', age: '21', location: 'New York', role: 'Student'},
    {name: 'Matt', age: '25', location: 'New Jersey', role: 'Student'},
    {name: 'Greg', age: '22', location: 'New York', role: 'Student'},
    {name: 'Mike', age: '21', location: 'Chicago', role: 'Teacher'} ];

// try {
//     console.log(sortAndFilter(people, ['name', 'asc'], ['location', 'asc'], 'role', 'Student'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(people, ['name', 'asc'], ['location', 'desc'], 'role', 'Student'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(people, ['ssn', 'asc'], ['name', 'asc'], 'age', '22'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(people, ['location', 'none'], ['name', 'asc'], 'age', '22'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(people, ['location', 'asc'], ['name', 'asc'], 'phone', '22'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(['location', 'asc'], ['name', 'asc'], 'age', '22'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(['string', {}], ['location', 'asc'], ['name', 'asc'], 'age', '22'));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter(people, ['location', 'asc'], ['name', 'asc'], 'age', 22));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(sortAndFilter([ {name: 'Ryan', age: '22', location: 'Hoboken', role: 'Student'}, {name: 'Greg', age: 22, location: 'New York', role: 'Student'}], 'location', 'age',
// }catch (e){
//     console.error(e);
// }

//Question 2 in arrayUtils
// try {
//     console.log(merge([3, 0, 1, 2, 4], [1, 2, 8, 15], [6, 3, 10, 25, 29]));
// }catch (e){
//     console.error(e);
// }
// console.log(merge([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], [6,3,"Patrick",25,29]))
// console.log(merge([3,0,"Lab2",2,"Aiden"], ["CS-546" ,"Computer Science",8,15], [6,3,"!Patrick",25,29]))
// try {
//     console.log(merge(["bar", 0, 1, [[[5, "foo"]]]], [7, "buzz", ["fizz", 8]]));
// }catch (e){
//     console.log(e);
// }
// try{
//     console.log(merge([3, 0, 1, 2, 4], [1, 2, 8, 15], false));
// }catch (e){
//     console.error(e);
// }
//console.log(merge([]))
//Question 3 in arrayUtils
// try{
//     console.log(matrixMultiply([ [2,3], [3,4], [4,5] ], [ [1,1,1], [2,2,2] ], [ [3], [2], [1] ]));
// }catch (e){
//     console.error(e);
// }
// console.log(matrixMultiply([ [3,5] ], [ [4], [4] ]))
// console.log(matrixMultiply([]));
// console.log(matrixMultiply([ [1,2], [3,3] ]))
// console.log(matrixMultiply([ [1,2] ], [ ['foobar'], [6] ]) )
// console.log(matrixMultiply([[1,2], [1,2,3]], [[1,2], [3,4]]))


//Question 1 in stringUtils
// try{
//     console.log(palindromes(["Madam", "Loot", "Was it a cat I saw?", "Poor Dan is in a droop", "Anna", "Nope"]));
// }catch (e){
//     console.error(e);
// }
// console.log(palindromes());
// console.log(palindromes("hi"));
// try {
//     console.log(palindromes("    "));
// }catch (e){
//     console.error(e);
// }
// console.log(palindromes(1));
//Question 2 in stringUtils
let badWords = ["bread", "chocolate", "pop"];
// try{
// console.log(censorWords("I like bread that has chocolate chips in it but I do not like lollipops", badWords))
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(censorWords("     ", badWords));
// }catch (e){
//     console.error(e);
// }
// try {
//     console.log(censorWords("I like bread that has chocolate chips in it", [2, "wow"]))
// }catch (e){
//     console.error(e);
// }
//console.log(censorWords("input string", ["bad", 123]))
//console.log(censorWords("Is mayonnaise an instrument? Did you smell it? That smell. A kind of smelly smell. The smelly smell that smells...smelly.", ["strum", "smell", "mayo"]));

//Question 3 in stringUtils
// try {
//     console.error(distance());
// }catch (e){
//     console.error(e);
// }
// console.log(distance([],true));
// console.log(distance("","",""));
// console.log(distance("Hello World!", "   !?!", "    ...  "));
// console.log(distance("Patrick", "Patrick", "Patrick"));
// console.log(distance(123, "CS", "Patrick"));
// console.log(distance("Hello there", "hello", ""));
// console.log(distance("Give me music suggestions", "rock", "pop"));
// console.log(distance("Bob met Adam on wednesday", "Adam", "Bob"));
// console.log(distance("I was going to buy preworkout powder yesterday", "going to", "workout powder"));
// console.log(distance("The brown fox jumped over the lazy dog", "fox", "dog"));
// try {
//     console.log(distance("I was going to buy workout powder yesterday", "going to", "workout powder"));
// }catch (e){
//     console.error(e);
// }
// console.log(distance("sphinx of black quartz, judge my vow", "QUARTZ", "vOW"));
// console.log(distance("I really hope it will snow soon because I like snow", "I", "snow"));
// console.log(distance("I like sweet and salty but I like sweet more", "salty", "sweet"));
// console.log(distance("wordTwo comes before wordOne", "wordOne", "wordTwo"))
// console.log(distance("You must always trim your input strings, unless told not to", " trim ", "strings") )
    //Question 1 in objectUtils
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"};
const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}};
const sixth = {name: {firstName: "Patrick", lastName: "Hill"}, age: 47, dob: '9/25/1975', hobbies: ["Playing music", "Movies", "Spending time with family"]};
const seventh = {age: 47, name: {firstName: "Patrick", lastName: "Hill"}, hobbies: ["Playing music", "Movies", "Spending time with family"], dob: '9/25/1975'};
const eighth = {b:3, a:2};
// try {
//     console.log(areObjectsEqual(first, second, third));
// }catch (e){
//     console.error(e);
// }
// console.log(areObjectsEqual(forth, fifth))
// console.log(areObjectsEqual(forth, third, sixth));
// console.log(areObjectsEqual(sixth, seventh));
// console.log(areObjectsEqual(first, eighth, third));
// console.log(areObjectsEqual({}, {}, {}, {}, {}));
// try {
//     console.log(areObjectsEqual([1, 2, 3], [1, 2, 3]));
// }catch (e){
//     console.error(e)
// }
// try {
//     console.log(areObjectsEqual("foo", "bar"));
// }catch (e){
//     console.error(e);
// }
// console.log(combineObjects({a: 1}, {}, {b: 2}));
    //Question 2 in objectUtils
// try {
//     console.log(calculateObject({a: 3, b: 7, c: 5}, [(n => n * 2), (n => Math.sqrt(n))]));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(calculateObject({ a: 'Hello', b: 7, c: false }, [(n => n * n)]));
// }catch (e){
//     console.error(e);
// }
// try{
//     calculateObject({ a: 1, b: 2, c: 3}, [false]);
// }catch (e){
//     console.error(e);
// }
console.log(calculateObject([1, 2], [(n => n * 2)]))
//console.log(calculateObject({ a: 3, b: 7, c: 5 }, [(n => Math.pow(n * 2, 3)), (n => n + 546), (n => n / Math.PI)]));
console.log(calculateObject({ a: 1, b: 2, c: 3, d: 4 }, [(n => { if (n % 2 == 0) { return n + 100 } else { return n - 100 } }), (n => n / 13)]) )
//Question 3 in objectUtils
// try{
// console.log(combineObjects(
//     { a: 3, b: 7, c: 5 },
//     { d: 4, e: 9 },
//     { a: 8, d: 2 }
// ));}catch (e){
//     console.error(e);
// }
// try{
//     console.log(combineObjects(
//         { b: 7, c: 5 },
//         { d: 4, e: 9, a: 'waffle' },
//         { a: 8, d: 2 },
//         { d: 3, e: 'hello' }
//     ));
// }catch (e){
//     console.error(e);
// }
// try{
//     console.log(combineObjects(
//         { apple: 'orange', orange: 'pear' },
//         { pear: 'blueberry', fruit: 4 },
//         { cool: false, intelligence: -2 }
//     ));
// }catch (e){
//     console.error(e);
// }
// try{
//
//     console.log(combineObjects(
//         { wow: 'crazy', super: 'duper' },
//             false
//     ));}catch (e){
//     console.error(e);
// }