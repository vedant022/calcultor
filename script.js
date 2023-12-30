let outputElement = document.getElementById('output');
let historyElement = document.getElementById('history');
let history = '';

function buttonClick(event) {
    const button = event.target;
    const value = button.dataset.value;

    switch (value) {
        case 'C':
            clearOutput();
            break;
        case '/':
        case '*':
        case '-':
        case '+':
            appendToOutput(value);
            break;
        case 'DEL':
            deleteLastChar();
            break;
        case '=':
            calculateResult();
            break;
        default:
            appendToOutput(value);
            break;
    }
}

function appendToOutput(value) {
    // Check if the current output is '0' and the new value is a digit or a decimal point
    if (outputElement.textContent === '0' && (/\d|\./).test(value)) {
        outputElement.textContent = value;
    } else {
        outputElement.textContent += value;
    }
}


function clearOutput() {
    outputElement.textContent = '0';
    history = '';
    updateHistory();
}

function deleteLastChar() {
    let currentOutput = outputElement.textContent;
    outputElement.textContent = currentOutput.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(outputElement.textContent);
        outputElement.textContent = result;
        history = `${outputElement.textContent} = ${result}`;
        updateHistory();
    } catch (error) {
        outputElement.textContent = 'Error';
    }
}

function updateHistory() {
    historyElement.textContent = history;
}
