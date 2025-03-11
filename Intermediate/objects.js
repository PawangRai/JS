// singleton
// Object.create()

const mySym = Symbol("key1")

const user = { 
    name: "Pawang", // Javascript automatically stores keys as strings so the name is   key stored as "name"
    "full name": "pawang rai",
    age: 18,
    mySym: "mykey10", // -> Now this might look that we have used the symbol as a key, but this is not that. It is just a normal key named mySym. In order to use the symbol as a key, we have to use it in another way.
    [mySym]: "mykey1", // -> Now this is the proper way to use the symbol as a key
    location: "Karachi",
    email: "pawang@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
    
}
// You can store arrays or even other objects inside a key of an object

// There are two ways to access values inside of an object.
// First is the . operator
console.log(user.name);

// Another way is through the bracket notation
console.log(user["full name"])

// The . operator is mostly used but it is also useful to know the other way

// To call the symbol as a key, we call it in the following way
console.log(user[mySym])
console.log(user["mySym"])

// You can also freeze an object so that it cannot be changed. To freeze an object, we do it in the following way

// Object.freeze(user) // -> Now we cannot make any changes to the object. No addition, no manipulation

// You can also add functions in an object
user.greeting = function(){
    console.log("Hello, hope you are well")
}

user.greeting()

