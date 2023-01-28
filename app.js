const computerChoiceDisplay = document.getElementById("Computer-choice")
const userChoiceDisplay = document.getElementById("User-choice")
const resultDisplay = document.getElementById("Result")

const possibleChoices = document.querySelectorAll('button')


possibleChoices.forEach(possibleChoice.addEventListener('click' ,(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
}))
