"use strict"; // This treats all the code as a newer version

// number => 2 to the power 53
// bigInt => for numbers greater than 2 to the power 53
// String => ""
// boolean => true/false
// null => when the value is left intentionally empty
// undefined => when the variable is initialized, no value is stored yet
// symbol => for uniqueness

console.log(typeof undefined) // Gives undefined
console.log(typeof null)      // Gives object because of mistake in js NULL IS NOT AN OBJECT

// The typeof non-primitive datatypes(object, array and function) is either object or function

// Arrays and objects are returned as objects
// Funcion is returned as a function but it's proper name is object function.

// The primitive datatypes(number, string, boolean, undefined, null, symbol, bigInt) all have their own datatype which is returned