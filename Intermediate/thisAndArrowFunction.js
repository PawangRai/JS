const user = {
  username: "Pawang",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`); // -> this keyword refers to the current context, if we remove it then it gives us an error
    // console.log(this); -> this gives us the current context
  },
};

user.welcomeMessage();
// console.log(this); -> this gives an empty object because there is no context in the global scope
// If we run the same code inside the console in the browser, we get the global context which is Window object

function phone() {
  let username = "hitesh";
  console.log(this.username); // -> This will give us undefined, this does not work inside of a function, it only works inside of an object
}
// phone(); -> Gives undefined

const phoneExp = function () {
  let username = "Pawang";
  console.log(this.username); // -> Also gives undefined
};
// phoneExp(); -> Gives undefined

const phoneArrow = () => {
  let username = "Pawang";
  console.log(this.username); // -> Also gives undefined
};
// phoneArrow() -> Gives undefined

const phoneArrow2 = () => {
  console.log(this); // -> This inside of an arrow function gives us an empty object becaue this does not have its own scope, it takes it's parent's scope which in this case is the global object {}
};
phoneArrow2();

// const addTwo = (num1, num2) => { -> Basic arrow function
//     return num1 + num2
// }

// Another way to use arrow functions is with implicit return, remove the curly braces and remove the return keyword
// const addTwo = (num1, num2) =>  num1 + num2

// We can also wrap the output with braces for readability
// const addTwo = (num1, num2) =>  (num1 + num2)

// To return an object with an arrow function, we must wrap that object inside of braces
const addTwo = (num1, num2) => ({ username: "Pawang" }); // -> This is the correct syntax, without wrapping it in braces, it will give us undefined

console.log(addTwo(3, 7));
