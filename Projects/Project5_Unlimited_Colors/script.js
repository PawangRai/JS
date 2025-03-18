const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        colorCode = Math.floor(Math.random()*16)
        color += hex[colorCode]
    }
    return color;
};

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let intervalId

const changeBg = function(){
    document.body.style.backgroundColor = randomColor()
}
const startChangingBg = function(){
    // intervalId = setInterval(changeBg, 1000) This code looks good but if the start button is clicked multiple times, then many instances will be created which will make color changing more rapid. To avoid this we can use

    if(!intervalId){ // This makes sure to run the code for changing background only if the intervalId is already null
        intervalId = setInterval(changeBg,1000)
    }
}

const stopBackgroundChanging = function(){
    clearInterval(intervalId)
    intervalId = null
}

start.addEventListener("click", startChangingBg)
stop.addEventListener("click", stopBackgroundChanging)


