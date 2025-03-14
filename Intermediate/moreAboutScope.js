// When we get into nested functions or nested scope, then things can become a bit tricky

function one() {
  const username = "Pawang";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website); -> This will give an error as the website is defined in the two function and the one function cannot access it.

  // Child functions can take values from parent functions but parent functions cannot take values from child function

  two();
}

one();

if (true) {
  const username = "Pawang";
  if (username === "Pawang") {
    const website = "Google";
    console.log(`${username} ${website}`);
  }
//   console.log(website); -> This will give error as the website was declared in the above block and is not accessible here
}
// console.log(username); -> This will also give an error here as the username was declared inside the if block and it is not available here


// I can call a normal function before defining it and it will give me no error
addOne(5)
function addOne (num){ // -> This is a normal function
    return num + 1
}

// However I cannot call an function expression before it is declared, it will give me an error
// addTwo(5) -> I cannot call it here, it gives an error
const addTwo = function(num){ // -> This is a function expression
    return num + 1
}

addTwo(5) // I can call it here

