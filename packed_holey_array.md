## There are two types of arrays in javascript

1. Continuous Array

2. Holey Array: array which has holes (empty index values)

These two types of arrays are further divided into three types of arrays

- SMI (small integer)
- Packed element    
- Double (float, string, function)

Based on the elements of an array and their index values, internally javascript optimizes them.

```javascript
const arr = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arr.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arr.push("7")
// PACKED_ELEMENTS
```

- If we change the array from PACKED_SMI to PACKED_DOUBLE, then we after removing the number we added to make it double, even if we do that, the array will always be PACKED_DOUBLE.


```javascript
arr[10] = 11
// HOLEY_ELEMENTS because few index positions are empty
console.log(arr[19]) // -> returns undefined. These undefined are costly operations
```

## How arrays access elements?
- When we try to access elements in an array, we perform a bound check that is if that element is actually present in our array or out of bounds. 

- If it is out of bounds, then we simply return undefined.

- If our array size is 10, and we try to access an element at position 9 which is an empty index, then it has passed the bound check because that 9 is actually inside the array.

- Now it passes the bound check, then we look for value at that position, it is undefined, then javascript looks for values in it's prototype, if this fails then javascript keeps looking until it reaches the object's prototype and if that fails then it returns undefined.

```javascript
// bound check -> fails

// hasOwnProperty(arr, 9) -> fails

// hasOwnProperty(arr.prototype, 9) -> fails

// hasOwnProperty(Object.prototype, 9) -> fails -> returns undefined
```

- This constant checking of elements is what makes holes an expensive operation to perform.

SMI > DOUBLE > PACKED

H_SMI > H_DOUBLE > H_PACKED

```javascript
const arrTwo = new Array(3)
// just 3 holes, HOLEY_SMI_ELEMENTS
arrTwo[0] = "1" // HOLEY_ELEMENTS 
arrTwo[1] = "2" // HOLEY_ELEMENTS 
arrTwo[2] = "3" // HOLEY_ELEMENTS 

const arrThree = []
arrThree.push("1") // PACKED_ELEMENTS
arrThree.push("2") // PACKED_ELEMENTS
arrThree.push("3") // PACKED_ELEMENTS