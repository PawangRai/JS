// There are many useful string manipulation methods and these are the barebones of how strings are useful

let myString = "I love games";
console.log(myString.toUpperCase()) // Returns everything as uppercase
console.log(myString.toLowerCase()) // Returns everything as lowercase

console.log(myString.replace("games", "programming")) // Replaces a particular part of string with the provided part

console.log(myString.indexOf("g")) // Gives the position of a specific character

console.log(myString.charAt(4)) // Gives us the character at that particular index position

console.log(myString.includes("z")) // Tells us if our requested string is part of the original string or not

console.log(myString.split(" ")) // Splits the string into an array with the specified separator

console.log(myString.substring(0,7)) // Gives a substring from the given string, first number is starting index, second number is ending index but exclusive

console.log(myString.slice(-7,3)) // Similar to substring, but can incorporate negative indexes. Negative simply means starting from the end, if the starting position is greater than the ending position then it simply returns an empty string