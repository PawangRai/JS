// In Javascript, there are some values that will evaluate to a true value and some will evaluate to a false value.

// Falsy values which will evaluate to a false
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values which will evaluate to a true
// "0", "false", " ", [], {}, function(){}

// How to check if an array is empty or not
let myArr = []
if (myArr.length === 0) {
    console.log("Array is empty");
}

// We can also check if our object is empty or not
const myObj = {}
if (Object.keys(myObj).length === 0) { // We get keys of an object and .keys() returns those keys as an array and is that array has a length of 0 then the object is empty
    console.log("Object is empty");
}

