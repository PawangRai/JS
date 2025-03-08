// In JS, when we convert a single datatype into someother datatype, we have to verify that our converted datatype is our desired datatype because javascript has some funky functionality when it comes to conversion

// "33" => converts to 33 number
// "33abc" => converts to a NaN which is still considered a number
// true => 1, false => 0

let score = -10

console.log(Boolean(score))


// Empty strings => false
// Non-empty strings => true

// String Concatenation

let str1 = "1";
let str2 = "2";

let str3 = str1 + str2;
// The + operator concatenates two strings 
// console.log(str3);

// console.log("1" + 2);

// console.log(1 + "2");

// console.log(1 + 1 + "2");

// The plus operator with a number does the conversation to string depending on the position of the numbers.

console.log(+true) // This converts boolean to a number which gives 1
console.log(+"") // This converts the empty string which is false and then converts it to a number that is 0


