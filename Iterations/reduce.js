// reduce() method accumulates values into a single result. Used to reduce an array to a single value. It modifies the accumulator in each iteration

const myNums = [1,2,3,4,5]
const total = myNums.reduce( (acc, currVal) => {
    console.log(`accumulator is ${acc} and current value is ${currVal}`);
    return acc + currVal
}, 0 ) // It has two things, an accumulator which is the sum of all the values and a current value which is the current value of the item in the array. We also have to specify an initial value which in this case is 0 which is specified like it is specified above.
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "data science course",
        price: 9999
    },
    {
        itemName: "mobile development course",
        price: 5999
    },
    {
        itemName: "DevOps course",
        price: 19999
    },
]

const newTotal = shoppingCart.map( (item) => (item.price) ).reduce( (acc, currVal) => (acc + currVal),0 )
shoppingCart.forEach((item) => (console.log(`course: ${item.itemName}, price: ${item.price}`)))
console.log(`Your total is ${newTotal}`);

