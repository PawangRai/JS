// In JS, when we convert a single datatype into someother datatype, we have to verify that our converted datatype is our desired datatype because javascript has some funky functionality when it comes to conversion

// "33" => converts to 33 number
// "33abc" => converts to a NaN which is still considered a number
// true => 1, false => 0

let score = -10

console.log(Boolean(score))


// Empty strings => false
// Non-empty strings => true