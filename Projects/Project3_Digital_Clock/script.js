const clock = document.getElementById("clock");

setInterval(function(){
    const date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`
}, 1000)

/* We select out element where we want to display our time. Then we called a setInterval() function, which takes in a callback and repeats it indefinately after a set period of time. Here we want time every second, so we call it every 1000 milliseconds. We create a new date object and display the time using .toLocaleTimeString method of the date object which returns the current time */