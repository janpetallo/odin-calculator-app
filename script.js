

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
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        if(secondNumber === 0){
            return 'i still love you';
        }
        return divide(firstNumber, secondNumber);
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
    if (e.target.classList.contains('digit')) { 
        if (btnValue === '.') { 
            // if display value already has a decimal, do nothing
            if (!displayValue.includes('.')) { 
                displayValue += '.'; 
            }
        } else {
            if (operator !== '' && secondNumber === '') { // if operator is selected and second number is empty
                displayValue = btnValue;
                secondNumber = Number(displayValue);
            } else if (operator !== '' && secondNumber !== '') { // if operator is selected and second number is not empty
                displayValue += btnValue;
                secondNumber = Number(displayValue);
            } else if (displayValue === '0') { // if display value is 0
                displayValue = btnValue;
            } else { // if display value is not 0
                displayValue += btnValue;
            }
        }
        
    } else if (e.target.classList.contains('operation')) {
        if (firstNumber === '' || secondNumber === '') {  
            firstNumber = Number(displayValue);
            if (btnValue === 'x') {
                operator = '*';
            } else if (btnValue === '÷') {
                operator = '/';
            } else {
                operator = btnValue; 
            }
        } else if (secondNumber !== '') { 
            firstNumber = operate(operator, firstNumber, secondNumber);
            operator = btnValue;
            displayValue = String(firstNumber);
            secondNumber = ''; 
        }
    } else if (e.target.classList.contains('clear')) {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        displayValue = '0';
    } else if (e.target.classList.contains('equals')) {
        if (firstNumber !== '' && secondNumber === '' && operator === '') {
            displayValue = String(firstNumber);
        } else if (firstNumber !== '' && secondNumber === '' && operator !== '') {
            displayValue = 'Error';
        } 
        else if (firstNumber !== '' && secondNumber !== '') {
            firstNumber = operate(operator, firstNumber, secondNumber);
            if (firstNumber === 'i still love you') {
                displayValue = 'i still love uu <3';
            } else {
                displayValue = String(firstNumber);
            }
            secondNumber = '';
            operator = '';
        } 
    } else if (e.target.classList.contains('del')) {
        if (displayValue.length === 1) {
            displayValue = '0';
        } else {
            displayValue = displayValue.slice(0, -1);
        }
    }
    document.querySelector('.display-screen').value = displayValue;
}

// event listener for button clicks
document.querySelector('.calculator').addEventListener('click', updateDisplay);

