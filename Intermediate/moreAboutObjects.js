// const metaUser = new Object(); This is a singleton object

const metaUser = {} // Non-singleton object

metaUser.id = "123abc"
metaUser.name = "Alice"
metaUser.isLoggedIn = true

// console.log(metaUser);

// We can also store objects inside of objects

const name = {
    fullname: {
        firstName: "Pawang",
        lastName: "Rai"
    }
}

// console.log(name.fullname.firstName);
// console.log(name.fullname.lastName);

// We can also combine different objects together

const frontend = {
    HTML: "Markup",
    CSS: "Styling",
    Javascript: "Dynamics"
}

const backend = {
    Java: "robust",
    Python: "flexible",
    Node: "Easy"
}

const languages = {frontend, backend} // -> This is problematic because it stores frontend object and inside of that object, it has keys HTML, CSS, Javascript. Similarly for backend object. They are their own objects
// console.log(languages);

// The proper way is to use the assign method
const properLanguages = Object.assign({}, frontend, backend) // -> Now this makes it so that all the keys and value of both frontend and backend are stored properly inside the object properLanguages

// console.log(properLanguages);

// Another most common way is by using the spread operator (...)

const spreadLanguages = {...frontend,...backend}
console.log(spreadLanguages);

// There are other objects methods like .keys(), .values() and .entries()

console.log(Object.keys(spreadLanguages)); // -> Gives only the keys

console.log(Object.values(spreadLanguages)); // -> Gives only the values

console.log(Object.entries(spreadLanguages)); // -> Gives each key and value pair in its own array

// There is another method to check if a key exists in an object or not

console.log(metaUser.hasOwnProperty("id")) 

const course = {
    name: "Javascript",
    price: "999",
    courseLanguage: "English"
}

// We can get individual items from an object and assign them to variables and it is called destructuring.
// Destructuring is also used with arrays but it is most commonly used with objects.

const {price} = course
console.log(price);



