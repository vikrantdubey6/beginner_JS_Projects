let RandonNum = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
    })
}

function validateGuess(guess){
if(isNaN(guess)){
    alert('please enter a valid number')
}
else if(1>=guess || guess>=100){
    alert('please enter a number Between 1 to 100 ')
}
// else if(guess>100){
//     alert('please enter a number less than 100 ')
// }
else{
    prevGuess.push(guess)
    if(numGuess === 10){
       displayGuess(guess)
       displayMessage(`Game Over! Random Number was ${RandonNum}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)

    }
}
}

function checkGuess(guess){
 if(guess === RandonNum){
    displayMessage('You guessed it Right')
 }
 else if(guess< RandonNum){
    displayMessage('Number is too low')
 }
 else if(guess > RandonNum){
    displayMessage('Number is too high')
 }
}

function displayGuess(guess){ //cleanup method
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    remaining.innerHTML = `${10- numGuess}`
    numGuess++
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disable', '')
    p.classList.add('button')
    p.innerHTML= '<h2 id= "newGame"> Start New Game </h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    document.querySelector('#newGame')
    newGame.button.addEventListener('click', function(e){
       RandonNum = (parseInt(Math.random() * 100 + 1))
       prevGuess = []
       numGuess = 1
       guessSlot.innerHTML = ''
       remaining.innerHTML = `${10 - numGuess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)
        playGame = true
    })
    
}
