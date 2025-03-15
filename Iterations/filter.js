// Let's say we want to return something in the forEach() loop. Now even if we use the return keyword explicitely, it does not return any values. 

// For this, we have the filter() method. The filter() method selects an element based on a certain condition. Returns a new array with only elements that pass that condition

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// let nuwNumbers = myNumbers.filter((item) => (item > 4)) -> We can either write the condition in this way

// let nuwNumbers = myNumbers.filter((item) => item > 4) -> Or we can write it in this way

let newNumbers = myNumbers.filter((item) => {
      return  item > 4 // -> Or if we open a scope, then we have to use the return keyword, otherwise we will get an empty array. All these methods do the same exact thing
}) 
console.log(newNumbers);

// We can do the same thing using forEach() but that will be a bit tedious

let myNewNumbers = []
myNumbers.forEach( (item) => {
    if (item > 4) {
        myNewNumbers.push(item)
    }
} )
console.log(myNewNumbers); // -> Same exact output, but more tedious here