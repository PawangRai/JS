// In Javascript, if you push() an array inside an another array, the pushed array will should up as a single item in the other array

let numbers1 = [1,2,3]
let numbers2 = [4,5,6]

numbers1.push(numbers2)
// console.log(numbers1)

// In order to make sure all the array items appear as individual items in another way, we have to use the concat() function

let names1 = ["Alice", "Barry", "Sam"]
let names2 = ["Jennifer", "Johanna", "Alice"]

// allNames = names1.concat(names2)
// console.log(allNames)

// But an even better way is to use the spread operator (...)

allNames = [...names1, ...names2]
// console.log(allNames)

// If we have a nested array, meaning multiple arrays inside of a single array, then we can use the flat method to get all the elements out from nested and into one flat array

let nestedArray = [1,2,3,[[3,4],6,7],9,10,"Pawang"]

let flatArray = nestedArray.flat(Infinity) // Flat takes in depth, how deep you want to get out the elements, ususally we pass in infinity and it handles how deep it has to get to get the elements
console.log(flatArray)

// There are two methods to create arrays

// one is Array.from() which creates arrays from any iterables (String, Set, Map, NodeList or an array like object)

// Another is Array.of() which creates a new array from a list of given arguments

let strArray = Array.from("Pawang")
console.log(strArray);

score1 = 100
score2 = 200
score3 = 300

allScores = Array.of(score1,score2,score3)
console.log(allScores)
