// Function is a block of code that gets executed everytime we call it.

function userLoggedIn(username = "someuser") { // To give default values, we use this syntax
    return `${username} just logged in`
}

const result = userLoggedIn()
console.log(result)