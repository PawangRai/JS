// map() method applies a function to each element of an array. It returns a new array with the transformed values. It does not modify the original array

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map((item) => (item*10))
console.log(myNumbers); // -> Original array does not change
console.log(newNumbers); // -> New array of transformed values

// We can also chain multiple methods together

let newNums = myNumbers
                 .map( (item) => (item * 10) )
                 .map( (item) => (item + 5) )
                 .filter( (item) => (item >= 40) ) // This type of chaining is allowed. First the map() method is applied, that multiplies each element by 10 and then returns a new array. Next, the second map() method is applied which adds 5 to each element of the array. Lastly, the filter() methods only values for values greater than 40 to be passed.
                 
console.log(newNums);