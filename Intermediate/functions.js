// Function is a block of code that gets executed everytime we call it.

function userLoggedIn(username = "someuser") { // To give default values, we use this syntax
    return `${username} just logged in`
}

const result = userLoggedIn()
// console.log(result)


// In this function, we can only pass in one value and the rest of the values are gone, not stored anywhere
function calculateShoppingCartTotal(num1) { // What if we dont know how many inputs are going to appear in the parameter list, to handle this we use the rest operator (...)
    return num1
}

// In this function, we handle all the values and we can make an array of all the parameters, no matter, how many we pass in
function newCalculateShoppingCartTotal(...num1){
    return num1
}

const newResult = newCalculateShoppingCartTotal(200,300,400,500) // now we can handle it in any way we want
console.log(newResult)


// We can also pass in objects and arrays to functions

const user = {
    username: "Pawang",
    price: 199
}

function handleObject(getObject){
    return `Hello ${getObject.username}, your price is ${getObject.price}`
}

// console.log(handleObject(user))

// We can also pass in direct objects to a function

console.log(handleObject({
    username: "Pawang",
    price: 199
}))

// We can do the same with arrays

function getSecondElement(array){
    return array[1]
}

let myarray = [1,2,3,4,5]

console.log(getSecondElement(myarray))

// We can also directly pass in the array
console.log(getSecondElement([1,2,3,4,5]))



