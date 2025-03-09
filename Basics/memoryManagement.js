// In Js, memory management is done in 2 ways, Stack and Heap
// Primitive data types are stored in stack
// Non-primitive data types are stored in a heap

let x = 100;
let y = x;

y = 200;

console.log(x)
console.log(y)

// Here a copy of x is passed to y and that is why changing value of y does not change x


let myObj1 = {
    name: "Pawang",
    age: 22
}

let myObj2 = myObj1;

myObj2.age = 35

console.log(myObj1.age)
console.log(myObj2.age)

// Here when myObj1 is stored in myObj2, a reference of myObj1 is passed so changing that reference from myObj2 also changes the value at myObj1
