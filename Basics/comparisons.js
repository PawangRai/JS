// Javascript becomes confusing when comparing values of different data types

console.log("2" > 1) // Returns true because it converts the string to a number

console.log(null > 0)  // Returns false 
console.log(null == 0) // Returns false
console.log(null >= 0) // Returns true

// The equality check operator (==) and comparison operators work differently.
// The comparison operators (>, >=, <, <=) convert null to 0 and perform operation accordingly. That is why null >= 0 gives true because null is being converted to 0 and 0 is >= 0