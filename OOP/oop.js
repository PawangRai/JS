const user = { // This is object literal
    username: "Pawang",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // return "Got user details from database"
        // return `${username}` If we do this, then we will get an error saying using name is not defined. In order to get the current execution context's username variable, we have to use the this keyword.

        // console.log(`Username: ${this.username}`);
        console.log(this); // Doing this here will give the current context which is the whole user object
    }
}

const user2 = { // This is object literal
    username: "Pawang",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // return "Got user details from database"
        // return `${username}` If we do this, then we will get an error saying using name is not defined. In order to get the current execution context's username variable, we have to use the this keyword.

        // return `Username: ${this.username}`
        return this // Doing this here will give the current context which is the whole user object
    }
}


console.log(user.username);
console.log(user.getUserDetails());
console.log(this); // -> This gives empty object, meaning the global context is empty. If we do the same in the browser, then we will get the window object which is the global context of the browser.

// Now lets see constructor function

// const promiseOne = new Promise() // -> The new keyword here is a constructor function. It allows for multiple instances of the same object.
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  // -> this is implicitly defined
}

// const userOne = User("Pawang", 12, true)
// const userTwo = User("Unknown", 34, false) -> If we do this then the values from userOne are being written in the global scope using this and when userTwo is being created, it changes the values in the global scope referenced by the same this. In order to avoid this, we have to use the new keyword to create a new execution context for each instance of the function
// console.log(userOne);

const userOne = new User("Pawang", 12, true)
const userTwo = new User("Unknown", 34, false)
console.log(userOne.constructor);
// console.log(userTwo);


