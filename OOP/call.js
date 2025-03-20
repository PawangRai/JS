// Let's say we create 2 functions, one named getUsername which takes in the user's username and set it. Another named createUser which takes username, email and password. Now I can set the email and password easily, but in order to set the username, I am calling setUsername function.

const setUsername = function(username){
    this.username = username
    console.log("This function is being called"); // -> I can write this console.log here which shows me that the function is being called but the value of the username is not being set. The problem is that this function is setting the value of username in it's own execution context, and when it is removed from the call stack, it also deletes the values assigned in it's own execution context.

    // -> To solve this problem, we can pass the execution context of the function in which we want the values to be saved
}

const createUser = function(username, email, password){
    // setUsername(this, username) // -> Here we pass in a this keyword, along with the username parameter.

    // We also have to use the call() method, because we have to hold the reference. We pass in the reference of the createUser() function by passing in the this keyword along with the argument. The execution context of the setUsername() will be deleted when then it has completed it's execution but because this is using the reference of createUser() function, we don't have to worry about losing the values.

    setUsername.call(this, username) // -> The call() method passes the our current execution context to some other function.

    this.email = email
    this.password = password
}

const pawang = new createUser("Pawang", "pawang@gmail.com", "123")
console.log(pawang); // -> Now when I print this, this gives me the email and password corrected, but does not give me the username. After correctly passing in the execution context of the function, we get the correct output.