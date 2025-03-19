// There are two parts to a promise. One is to create them, one is to consume them.
// First we will see, how to create a promise

// The promise takes in a callback, first part of the callback  is resolve, second part of the callback is reject
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is complete"); // We have to connect our resolve with our .then() method, we can do that by calling the resolve() method
        resolve()
    },1000)
})  // Now the promise is created, now we have to consume the promise, .then() runs when the task we were trying to do was successfully accomplished, .catch() tries to handle any error that occurred.

// .then() method takes in a callback that runs when the promise is resolved
promiseOne.then(function(){
    console.log("Promise has been consumed"); 
})

// This below approach combines the above two parts into a single approach
new Promise(function(resolve,reject){ 
    setTimeout(function(){
        console.log("Async task 2 has been completed");
        resolve()
    },1000)
})
.then(function(){
    console.log("Async 2 resolved");
})

// We can also pass data from resolve() to then() method
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Pawang", email: "lohanapr@gmail.com"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Pawang Rai", password: "123"})           
        } else {
            reject("ERROR: Something went wrong")
        }
    },1000)
})

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })
// console.log(username); // This does not work as the user.username returns a new promise and we have to resolve that promise as well separately that is why this does not work

// Since we have both a resolve and a reject, we have to handle both cases using .then() and .catch() in order to avoid any complications
promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("Finally, the promise has either been resolved or rejected"))// This finally is always executed

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})           
        } else {
            reject("ERROR: JS went wrong")
        }
    },1000)
})

// we can also handle promise using async await
// When using async await, we also have to handle the code using try catch block so that we are also handling the case when the promise throws a reject()
async function consumePromiseFive() { 
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch("https://api.github.com/users/pawangrai")
        // console.log(response);
        const data = await response.json() // .json() also takes some time so we have to use await keyword here as well
        console.log(data); 
    } catch (error) {
        console.log("E: ", error);
    } 
}
// getAllUsers()

// Now we can do the same task above, but with promises instead of using async await

fetch("https://api.github.com/users/pawangrai")
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})