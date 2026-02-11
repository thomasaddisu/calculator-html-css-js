const output = document.querySelector('.output')
const numbers = document.querySelectorAll('.number')
const remove = document.querySelector('.remove')
const operatorButtons = document.querySelectorAll('.operator')
const delete_remove = document.querySelector('.delete-remove')

// Initialize variables
let firstNumber = null;
let shouldResetScreen = false;
let operator = null;


// update output 
const update_output = function (value) {
    output.textContent = value;
}

update_output("");

const store_number = function(e){
    if (shouldResetScreen) {
        output.textContent = '';
        shouldResetScreen = false;
    }
    output.textContent += e.target.textContent;
}

const press_operator = function(e) {
    


    if (firstNumber === null) {
        firstNumber = parseFloat(output.textContent);
    }else if(operate){
        const secondNumber = parseFloat(output.textContent);
        const result = operate(firstNumber, secondNumber, operator);
        update_output(result);
        firstNumber = result; // Store the result for the next operation
    }

    operator = e.target.textContent;
    shouldResetScreen = true;
    if (operator === '=') {
        // If the operator is '=', we reset everything
        firstNumber = null;
        operator = null;
        shouldResetScreen = false;
    }
    
}

const operate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return b;
    }
}
    
numbers.forEach(num => num.addEventListener('click', store_number));
operatorButtons.forEach(op => op.addEventListener('click', press_operator));
