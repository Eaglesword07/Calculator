
// Variables
const operationDisplay = document.querySelector('.user-input');
const answerDisplay = document.querySelector('.answer');

const clearBtn = document.querySelector('.clear-btn');
const backSpace = document.querySelector(`#backspace`);

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelector('.decimal');
const equalsTo = document.querySelector('.equals-btn');

// --------------------------- Event Listeners -------------------------------

// document.addEventListener("keydown", function (event) { console.log(event); });

// -------- Event Listeners for Onclick events --------
function clearBtnAction() {
    operationDisplay.innerText = '';
}

function backspaceAction() {
    const newValue = operationDisplay.value.slice(0, -1);
    operationDisplay.value = newValue;
}
// Get the inputs for both the operands and operators into display
function handler(e) {
    const value = e.target.value;
    operationDisplay.innerText += value;
}
// Clear Button
clearBtn.addEventListener('click', clearBtnAction);
// Backspace
backSpace.addEventListener('click', backspaceAction);
// Decimal
decimal.addEventListener('click', handler);
// Numbers
numbers.forEach((number) => {
    number.addEventListener('click', handler)
})
// Operators
operators.forEach((operator) => {
    operator.addEventListener('click', handler)
})


// ------------------Event listeners for keydown events---------------------
function handlerOnKeydown(e) {
    if (e.code === 'Backspace') {
        backspaceAction();
    } if (e.key >= 0 && e.key <= 9) {
        operationDisplay.innerText += e.key;
    } if (e.key === '+' || e.key === '-' || e.key === '*' ||
        e.key === '/' || e.key === '%' || e.key === '.') {
        operationDisplay.innerText += e.key;
    } if (e.key === 'Delete' || e.key === 'c' || e.key === 'Escape' || e.key === 'clear') {
        clearBtnAction();
    }
}

document.addEventListener('keydown', handlerOnKeydown);


// ------------------Create fucntions for all operations--------------------
const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const modulo = function (a, b) {
    return a % b;
}


function operation() {
    let firstOperand = parseFloat(operationDisplay.innerText[0]);
    let secondOperand = parseFloat(operationDisplay.innerText[2]);
    let operator = operationDisplay.innerText[1];
    let result;
    switch (operator) {
        case '+':
            result = add(firstOperand, secondOperand);
            break;
        case '-':
            result = subtract(firstOperand, secondOperand);
            break;
        case 'x':
            result = multiply(firstOperand, secondOperand);
            break;
        case '/':
            result = divide(firstOperand, secondOperand);
            break;
        case '%':
            result = modulo(firstOperand, secondOperand);
            break; 
        default:
            return;
    }                     answerDisplay.innerText = result;

}

equalsTo.addEventListener('click', operation);
