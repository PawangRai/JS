// Write a function findFirstRepeated(arr) that takes an array as input and returns the first repeated element. If no element is repeated, return null.

const firstFindRepeated = function(arr){
    let testarr = []
    let i = 0
    let count = 0
    while(i < arr.length){
        if(testarr.includes(arr[i])){
            return arr[i]
        }
       testarr.push(arr[i])
       i++;
    }
    return null
}
let myArray1 = [5, 3, 4, 3, 5, 6]
let myArray2 = [1, 2, 3, 4, 5]
let myArray3 = [7, 7, 8, 9, 10]

console.log(firstFindRepeated(myArray1))

// while loops run until a certain condition is true
// do-while loop function as same as while loop, but their first iteration is guarenteed, regardless of the condition. It checks for the condition from the after the 1st iteration is complete.
