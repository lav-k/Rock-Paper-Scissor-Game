const computerChoicedisplay = document.getElementById('computer-choice')
const userChoicedisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll(".choice")
const windisplay = document.getElementById('win')
const lostdisplay = document.getElementById('lost')
const drawdisplay = document.getElementById('draw')
const restart = document.querySelector('#restart')


let userChoice
let computerChoice
let result


possibleChoices.forEach( possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id // it returns the element that targeted the event
        userChoicedisplay.innerHTML = userChoice
        generateComputerChoice()
        getResult()
}))

 restart.addEventListener('click', (e) => {
    
    windisplay.innerHTML = 0
    drawdisplay.innerHTML = 0
    lostdisplay.innerHTML = 0
    computerChoicedisplay.innerHTML = ""
    userChoicedisplay.innerHTML = ""
    resultdisplay.innerHTML= ""
    win=0
    draw=0
    lost=0
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissor'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoicedisplay.innerHTML = computerChoice
}    
let win = 0
let lost = 0
let draw = 0
function getResult(){
    
    if(computerChoice === userChoice)
    {
        result = 'Its a draw!'
        draw++
    }
    if(computerChoice === 'rock' && userChoice === 'paper')
    {
        result = 'You Win!'
        win++
    }
    if(computerChoice === 'rock' && userChoice === 'scissor')
    {
        result = 'You lost!'
        lost++
    }
    if(computerChoice === 'paper' && userChoice === 'scissor')
    {
        result = 'You Win!'
        win++
    }
    if(computerChoice === 'paper' && userChoice === 'rock')
    {
        result = 'You lost!'
        lost++
    }
    if(computerChoice === 'scissor' && userChoice === 'rock')
    {
        result = 'You Win!'
        win++
    }
    if(computerChoice === 'scissor' && userChoice === 'paper')
    {
        result = 'You lost!'
        lost++
    }
    resultdisplay.innerHTML = result
    windisplay.innerHTML = win
    drawdisplay.innerHTML = draw
    lostdisplay.innerHTML = lost
    
}

