let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuesses = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number")
        userInput.value = ""
    } else if(guess < 1){
        alert("Please enter a value greater than 0")
        userInput.value = ""
    } else if (guess > 100){
        alert("Please enter a value less than 100")
        userInput.value = ""
    } else {
        prevGuesses.push(guess);
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();          
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage("You won")
        endGame()
    } else if (guess < randomNumber){
        displayMessage("Number is tooo low")
    } else if (guess > randomNumber){
        displayMessage("Number is tooo high")
    }
}  

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuesses = []
        newGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)


        playGame = true
    })
}
