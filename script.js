

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber){
    if(operator === '+'){
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if(operator === '*') {
        return multiply(firstNumber, secondNumber)
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber)
    }
}

// variables for the calculator
let firstNumber = '';
let secondNumber = '';
let operator = '';

let displayValue = '0'; // initialize display value

// function to update display
function updateDisplay(e) {
    const btnValue = e.target.innerText;
    if (e.target.id === 'digit') {
        if (displayValue === '0') {
            displayValue = btnValue;
        } else {
            displayValue += btnValue;
        }
    }
    document.querySelector('.display-screen').value = displayValue;
}

// event listener for button clicks
document.querySelector('.calculator').addEventListener('click', updateDisplay);

