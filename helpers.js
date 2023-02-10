/* Todo: Implment any helper functions below 
    and then export them for use in your other files.
*/
import {sortAndFilter, merge, matrixMultiply} from "./arrayUtils.js"
import {palindromes, censorWords, distance} from "./stringUtils.js"
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
console.log(distance("I was going to buy workout powder yesterday", "going to", "workout powder"))
// let str = "I was going to buy workout powder yesterday";
// let word1 = "workout powder";
// word1.split(" ").map(item => console.log(str.split(" ").indexOf(item)));
console.log()
console.log()
console.log()
console.log()
console.log()
console.log()
