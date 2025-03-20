// Lets say there is a Math.PI property in javascript. Question is, can we change this property? If yes, then how, if no then why?

// In order to understand this, we have to dig deeper in javascript.

// We can get a description of a propery by the following method
const properties = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(properties); // This gives the detailed properties of PI, it's value. writable is false, enumerable is false and configurable is false, that is why we cannot change it's value. We cannot change these properties because they are so tightly packed inside the javascript core engine.

// We can do the same for our own properties

const user = { // This object also has it's own descriptor properties.
    username: "Pawang",
    email: "abc@xyz.com",
    isOnline: true,

    login: function(){
        console.log(`${this.username} has been logged in`);
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "username")) // This shows the property description for the property username.

// Now we can change these values as well
Object.defineProperty(user, "username", {
    writable: false,
    enumerable: false
}) // Now writable and enumerable are false, so if we try to change it's value, we shouldn't be allowed to.

console.log(user.username);
user.username = "Notpawang" // This did not change the value because we have set writable as false.
console.log(user.username);

// We can also try to see if we can loop over the property or not because we have set enumerable as false. We have to use Object.entries() and pass in the user object, because object by itself are not iterable

// If we set enumerable of the username propery as false, we cannot print the username property but the rest of the properties work just fine.

for (let [key,value] of Object.entries(user)) {
    // In order to not print a function as part of the key, value, we have to check to make sure what we are printing is not a function
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}



