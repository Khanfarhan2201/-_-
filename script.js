// script.js
const display = document.getElementById('result');
const inputHistory = document.getElementById('inputHistory');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let history = '';

function updateDisplay() {
    display.value = currentInput;
}

function updateHistory() {
    inputHistory.value = history;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            history = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput);
                history += ` ${currentInput} = `;
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
            history += value;
        }

        updateDisplay();
        updateHistory();
    });
});
