const coding = ["js", "ruby", "python", "java", "cpp"]

// coding.forEach() -> This function accepts a callback function

// coding.forEach( function name() {} ) We write a normal function like this, but since it is a callback function, a callback function does not have a name

coding.forEach(function (item) {
    console.log(item); // -> Here, item means each element in the array
}) 

// We can also use arrow functions as callbacks
coding.forEach((value) => {
    console.log(value);
})

// We can also pass a function as a callback function
function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // -> Remember, we have to pass the function reference here. Not call it.

coding.forEach((item, index, arr) => { // -> ForEach() has access to three things, item, that is that particular element in the array. Index, the index value of that element in the array. arr, that complete array.
    console.log(item, index, arr);
})

// Let's say we have an array of objects
const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item["languageName"]); // We can get objects inside of an array like this by simply using forEach() look to get that element, then calling any desired property of that object.
})