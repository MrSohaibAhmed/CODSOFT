const resultField = document.getElementById('result');
const numButtons = document.querySelectorAll('.num-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const clearButton = document.querySelector('.clear-btn');
const calculateButton = document.querySelector('.calculate-btn');

let currentInput = '';
let currentOperator = '';
let previousInput = '';

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        resultField.value = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            if (previousInput !== '') {
                currentInput = operate(previousInput, currentInput, currentOperator);
                resultField.value = currentInput;
            }
            previousInput = currentInput;
            currentOperator = button.textContent;
            currentInput = '';
        }
    });
});

calculateButton.addEventListener('click', () => {
    if (currentInput !== '' && previousInput !== '') {
        currentInput = operate(previousInput, currentInput, currentOperator);
        resultField.value = currentInput;
        previousInput = '';
        currentOperator = '';
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    resultField.value = '';
});

function operate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            if (num2 !== 0) {
                return (num1 / num2).toString();
            } else {
                return 'Error';
            }
        default:
            return '';
    }
}
