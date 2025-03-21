```javascript

function createCounter() {
    let count = 0; // Private variable

    return function() {
        count++; 
        console.log(count);
    };
}

const counter = createCounter(); // Closure created
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

```

- createCounter() returns an inner function.

- Even though createCounter() finishes execution, the returned function still has access to count because of closure.

- Every time counter() is called, it remembers and updates the count variable.