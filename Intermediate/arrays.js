// In Javascript, arrays are a collection of many types of variables, they can be same datatype or different

let arr1 = [1,2,3,4,5]

arr1.push(6) // push() inserts an element at the end of the array
console.log(arr1)
arr1.pop() // pop() removes the end element from the array
console.log(arr1)


let arr2 = [10,9,8,7,6]

arr2.unshift(11) // unshift() adds an element to the beginning of the array
console.log(arr2)
arr2.shift() // shift() removes the beginning element from the array
console.log(arr2)

// There are other methods like includes() of indexOf() but they are self-explanatory

let arr3 = [1,2,3,4,5]
console.log(typeof arr3.join()) // The join() method converts the data type of the array to a string

// There is also the concept of slice() and splice()
// slice works like a substring, gives you part of the array, starting index is included but ending index is not included. It does not change the original array

// splice gives us the first and ending index elements but it removes those elements from the original array


let arrnew = [1,2,3,4,5]
console.log(arrnew.slice(1,4)) // This gives us the output 2,3,4. 
console.log(`array after slicing ${arrnew}`) // Original array is unchanged

console.log(arrnew.splice(1,4)) // This gives us the output 2,3,4,5
console.log(`array after splicing ${arrnew}`) // 2,3,4,5 are removed from the original array so they only element left is 1

