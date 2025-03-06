const accountId = 11223344; // This cannot be changed

let accountName = "Pawang"; // This can be changed
// variables created with let are block-scoped. They are only avaible inside {}

var accountPassword = "12345" // This can be changed
// variables created with var are function-scoped. They are available anywhere in the function

// Variables declared without any keyword are automatically considered global variables


let accountState; // Initialized variables but no value in them are considered undefined

console.table([accountId, accountName, accountPassword, accountState]); // console.table method prints all the listed values in a tabular manner

