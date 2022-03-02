const opponentChoiceDisplay = document.getElementById('opponent-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let opponentChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateopponentChoice()
  getResult()
}))

function generateopponentChoice () {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
  // console.log(randomNumber)
  // if (randomNumber === 1) {
  //  opponentChoice = 'rock'
  // } else if (randomNumber === 2) {
  //  opponentChoice = 'paper'
  // } else if (randomNumber === 3) {
  //  opponentChoice = 'scissors'
  // }
  switch (randomNumber) {
    case 1:
      opponentChoice = 'rock'
      break
    case 2:
      opponentChoice = 'paper'
      break
    case 3:
      opponentChoice = 'scissors'
      break
  }
  opponentChoiceDisplay.innerHTML = opponentChoice
}

function getResult () {
  if (opponentChoice === userChoice) {
    result = 'Its a Draw!'
  } else if (opponentChoice === 'rock' && userChoice === 'paper') {
    result = 'You Win!'
  } else if (opponentChoice === 'paper' && userChoice === 'scissors') {
    result = 'You Win!'
  } else if (opponentChoice === 'scissors' && userChoice === 'rock') {
    result = 'You Win!'
  } else {
    result = 'You Lose!'
  }
  resultDisplay.innerHTML = result
}
