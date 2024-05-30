/*-------------------------------- Constants --------------------------------*/

const operators = [ '+', '-', '*', '/' ]

/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const displayElement = document.querySelector('.display')
const numberButtonElements = document.querySelectorAll('.button.number')
const operatorButtonElements = document.querySelectorAll('.button.operator')
const clearButtonElement = document.querySelector('.button.clear')
const equalButtonElement = document.querySelector('.button.equals')

/*----------------------------- Event Listeners -----------------------------*/

numberButtonElements.forEach(button => {
    button.addEventListener('click', (event) => {
        let clickedNumber = event.target.innerText
        updateDisplay(clickedNumber)
    })
})

operatorButtonElements.forEach(button => {
    button.addEventListener('click', (event) => {
        operator = event.target.innerText
        updateDisplay(operator)
    })
})

clearButtonElement.addEventListener('click', clear)

//equalButtonElement.addEventListener('click', (evt) => {
    
//})
/*-------------------------------- Functions --------------------------------*/

function calculate() {

}

function clear() {
    displayElement.textContent = '0'
}

function updateDisplay (input) {
    displayElement.textContent = input
}