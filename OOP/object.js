function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// The above code illustrates that eveything in javascript is an object whether it be a string, a function or an array, all of these are on the surface an object.

function createUser(username, bill){
    this.username = username 
    this.bill = bill
}

// We can inject custom created functions with the help of prototype that never existed, but we want to create them.

// Now the increment function does not know, which one to increment, bill or tea. In order to avoid such complication, we use the this keyword, this keyword makes sure whoever called it, it increments that objects bill property. We do the same for the printMe function, use the this keyword.

createUser.prototype.increment = function(){
    this.bill++ 
}

createUser.prototype.printMe = function(){
    console.log(`bill is ${this.bill}`);
}

const chai = createUser("chai", 25)
const tea = createUser("tea", 250)

// chai.printMe() -> this still gives an error because we have to use the new keyword because we need to tell we have assigned some new properties to the prototype

const chai2 = new createUser("chai", 25)
const tea2 = new createUser("tea", 250)

chai2.printMe()
