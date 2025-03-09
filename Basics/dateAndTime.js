// In Javascript, date and time are a little complex to work with
// In JS, dates are stored as milliseconds from the date 1st, January, 1970

let myDate = new Date();
console.log(myDate.toDateString()) // Gives us the Day and Date
console.log(myDate.toTimeString()) // Gives us the current time

console.log(myDate.toString()) // Gives both date and time

console.log(myDate.toLocaleDateString()) // Gives the date according to the system's locale settings 
console.log(myDate.toLocaleTimeString("en-PK")) // Gives the time according to the system's locale settings

let createdDate = new Date(2025, 1, 2, 0, 0) // One way to create a date object with a particular date

// Another way is the following

let newCreatedDate = new Date("2025-02-02") // Specify the date in "YYYY-MM-DD" or we can use "MM-DD-YYYY"

let timeStamp = Date.now()
console.log(timeStamp) // This gives us millisecond values since the date 1st, January, 1970

// The code below shows how you can calculate the number of days that have elapsed between two dates, here the two dates are 2-feb and the current date

// Calculate their current time in milliseconds and the find the difference between them and then convert those millisecond differences to days

let oldTimeStamp = newCreatedDate.getTime();

let difference =   timeStamp - newCreatedDate.getTime();

let numberOfDays = Math.floor(difference/(1000*60*60*24))

console.log(numberOfDays)



