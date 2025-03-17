Javascript Execution Context: determines how javascript files run or execute.

Whenver some Javascript code is executed, a Global Execution Context is created referenced by the this keyword.

There are 3 execution contexts.
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context (Property of Global Object)

Javascript runs programs into 2 phases
1. Memory Creation Phase (Space for variables is allocated)
2. Execution Phase

Let's take a code example
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

Step 1: Global Execution or Global Environment
Allocated by this keyword

Step 2: Memory Creation Phase
val1 -> undefined
val2 -> undefined
addNum -> defination
result1 -> undefined
result2 -> undefined

Step 3: Execution Phase
val1 -> 10
val2 -> 5
addNum -> creates it's own execution context which includes new variable environment and an execution thread
result1 -> 15
result ->

Whenever a function is created, it has it's own variable environment and an execution thread so we have to repeat the two steps (Memory Creation Phase and Execution Phase)

Step 1: Memory Creation Phase for addNum
val1 -> undefined
val2 -> undefined
total -> undefined

Step 2: Execution Context Phase for addNum
num1 -> 10
num -> 5
total -> 15 -> This gets returned to it's parent executional context.

The function's execution context is auto deleted after it's work is done

Now we are calling the same function addNum for result2, so we repeat all the steps again. Allocate memory to it and then execute it after which it's value is returned to the parent execution context.


Now there is another thing called Call Stack, Call Stack determines in which manner our functions are called.

When we run the code, a Global execution context first enters the stack and the functions are then entered into the stack and leave when they are finished executing. 
This happens in a stack so they progress in a LIFO manner.

If func1() -> func2() -> func3() then, first global enters, then func1() enters. func1() calls func2() so func2() enters. func2() calls func3() so func3() enters.

After execution is complete

func3() is the first to leave, then func2(), and then func1().

