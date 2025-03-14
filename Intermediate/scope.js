// Now we will learn about scope in Javascript

if (true) {
  let a = 10; // -> This is block-scoped meaning this is only available inside this if statement
  const b = 20; // -> This is also block-scoped and this is only available inside this if statement
  var c = 30; // -> This is global-scoped and this is available outside this if statement and we do not want this, that is why we don't use var
}

// console.log(a) -> This will give error saying a is not defined
// console.log(b); -> This will also give error saying b is not defined
console.log(c); // -> This will not give error and will run 

// This is why we avoid using var and instead use let and const
