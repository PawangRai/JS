const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body");
// console.log(buttons);
// console.log(body);
buttons.forEach((button) => {
    button.addEventListener("click", function (e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id            
        }
        if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id            
        }
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id            
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id            
        }
    })
})

/* We select our buttons using query selector and also select our body.
Then we go through each button and add an event listener for click. If our target.id matches our color, then we set the background to that color */