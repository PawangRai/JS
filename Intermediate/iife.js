// IIFE -> Immediately Invoked Function Expressions
// Good for two reasons
// 1. We want some functions to get immediately executed such as database connection
// 2. We dont want global scope variables to mess up with the function scope since global scoped variables can be accessed inside the function

(function phone() { // -> This is a named IIFE, since it has the name phone
  console.log("DB Connected");
})(); // When writing two IIFEs, together it is mandatory we end the first IIFE with a semicolon, otherwise, we will get an error


// We can also create unnamed arrow function IIFEs
(() => {
    console.log("DB 2 connected")
})();

// To pass arguments in an IIFE, we can simple pass in arguments in the following way
((name) => { // declare parameters here
    console.log(`${name}, Hello there`);
})("Pawang") // pass arguments here


