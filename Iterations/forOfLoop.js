// for of loop

// This loop works for iterables (Arrays, Strings)
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World!!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Another Javascript datatype is Maps
// Map stores key-value pairs while preserving the order of insertion. Unlike an object in which key has to be a string, Map can have any data type as a key.

const map = new Map()
map.set("PK", "Pakistan")
map.set("USA", "United States of America")
map.set("FR", "France") // If any repeated value is stored again, then it does not show up in the map

// console.log(map);

for (const key of map) { // This takes one by one each item and prints it. Each item in this case is a key-value pair, to just get key or value we can do it in the way shown below
    console.log(key);
}

for (const [key, value] of map) { // Now we have destructured the array
    console.log(`${key} stands for ${value}`);
}

const games = {
    "game1": "NFS",
    "game2": "GTA"
}

for (const game of games) {
    // console.log(game); // Because objects are not iterable, you cannot use for of loop on them to iterate over them
}

// for of loop work on arrays and maps but not on objects