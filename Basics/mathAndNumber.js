/* There are a lot of useful Math and Number properties and methods we can use in javascript

There are basic number properties like, MAX_VALUE, MIN_VALUE, etc
There are basic Math properties like PI, E, SQRT2, but we are going to focus more on methods

*/

const myNumber = 143.23

console.log(myNumber.toFixed(2)) // toFixed() makes it so that how many numbers we want after the decimal point, most of the time, it is 2

console.log(myNumber.toPrecision(4)) // toPrecision() is interesting because it makes sure that our output has the specified number of significant digits in it's answer, toPrecision(4) gives us 4 significant digits and so on, it may convert to exponent notation if need 


const hundreds = 1000000000
console.log(hundreds.toLocaleString()) // This gives us our number in internation standard with commas,
// 1000000000 => 1,000,000,000

/* Now Math methods are more important

There are Math methods like round, ceil, floor, abs, max, min. These are all self-explanatory

What is interesting is the Math.random function
Math.random() gives us values between 0 and 1(exclusive)

The below codes makes it so that the numbers fall within our desired range

Lets say we want to generate random values between a certain limit, max and min, we would write the code as following to generate random numbers that obey that limit 

*/ 

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
