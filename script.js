const computerChoiceDisplay = document.getElementById("computer-choice")
const playersChoiceDisplay = document.getElementById("players-choice")
const resultsDisplay  = document.getElementById("results")
const possibleChoices = document.getElementById("btns")
let playersChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>  {
    playerChoice = e.target.id
    playersChoiceDisplay.innerHTML = playerChoice
    computerChoiceDisplay()
    getResult()
 } ))

 function computerPlay() {
     const  randomNumber = Math.floor(Math.random() * 3)

     if (randomNumber === 1) {
         computerChoice = 'rock'
     }
     if (randomNumber === 2) {
         computerChoice = 'scissors'
     }
     if (randomNumber === 3) {
         computerChoice = 'paper'
     }
      
    computerChoiceDisplay.innerHTML = computerChoice
 }

 function getResult() {
     if (computerChoice === playersChoice) {
         result = 'its a draw!'
     }
     if (computerChoice === 'rock' && playersChoice === 'paper') {
         result = 'you win!'
     }
     if (computeChoice === 'rock' && playersChoice === 'scissors') {
         result = 'you lost!'
     }
     if (computerChoice === 'paper' && playersChoice === 'rock') {
         result = 'you lost!'
     }
     if (computerChoice === 'paper' && playersChoice === 'scissors') {
         result = 'you win!'
     }
     if (computerChoice === 'scissors' && playersChoice === 'rock') {
         result = 'you win!'
     }
     if (computerChoice === 'scissors' && playersChoice === 'paper') {
         result = 'you lost!'
     }
     resultsDisplay.innerHTML = result
 }