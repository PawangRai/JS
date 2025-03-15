const myObject = {
    "js": "Javascript",
    "cpp": "C++",
    "rb": "Ruby",
    "swift": "Swift by Apple"
}

// for of does not work on objects

// for objects, we have the for in loop

for (const key in myObject) {
    console.log(key); // This gives all the keys in the object
}

for (const key in myObject) {
    console.log(`${key} is for ${myObject[key]}`); // This gives all the values in the object
}

let programming = ["js","ruby","python","java","cpp"]
for (const languages in programming) {
    // console.log(languages); -> This only gives us the keys, that is all the index values of the array. We can also get values here by doing programming[languages] here
}

const map = new Map()
map.set("PK", "Pakistan")
map.set("USA", "United States of America")
map.set("FR", "France")

for (const key in map) {
    // console.log(key); -> does not print anything
}

