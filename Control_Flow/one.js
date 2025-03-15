// Comparison Operators
// <, >, <=, >=, ==, ===, !=, !==

const score = 50;
let power;

if (score >= 100) {
  power = "fly";
  console.log(`User power: ${power}`);
} else {
  power = "none";
  console.log(`User power : ${power}`);
}

// We can write conditionals like this as well

let balance = 1000;
if (balance >= 500) console.log("Balance is greater than 500"); // You can write one-liners like this without curly braces. You can also write a comma and continue writing the code instead of the semi-colon, but that is not readable and therefore not a good practice.

// There are also logical operators
// && -> AND Operator -> Make sure all the conditions are true to evaluate a true
// || -> OR Operator -> At least one true to evaluate to a true


// Nullish Coalescing Operator (??) works on null and undefined

// returnFromFunction = "Pawang"
returnFromFunction = null
defaultValue = 10
let val1 = returnFromFunction ?? defaultValue // Now if the return from the function is null or undefined, then we get the default value. If the return from a function is a valid output, then we get that output stored in the val1

console.log(val1);

// If we a situation like this, null ?? undefined, then we get the right-most value. In this case, it is undefined.

// if we had undefined ?? null, then we would get null.

// If we use more than two values with ??, then the first non-nullish value gets chosen.

// Terniary Operator
// condition ? true : false

const phonePrice = 800
phonePrice > 600 ? console.log("Phone is Flagship") : console.log("Phone is Midrange");