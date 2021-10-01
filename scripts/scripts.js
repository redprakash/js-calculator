let userNumberOne, myOperator, userNumberTwo;

let calculatorDisplay = document.querySelector('.display__userInput');

let pressedNum = document.querySelectorAll('button');

//Function to do the calculation
let result = function calculate(numberOne, operator, numberTwo) {
  switch (operator) {
    case '+': {
      return parseFloat(numberOne) + parseFloat(numberTwo);
    }
    case '-': {
      return parseFloat(numberOne) - parseFloat(numberTwo);
    }
    case 'x': {
      return parseFloat(numberOne) * parseFloat(numberTwo);
    }
    case '/': {
      return parseFloat(numberOne) / parseFloat(numberTwo);
    }
    default:
      alert('Sorry invalid operator or something is wrong');
  }
};

for (let i = 0; i < pressedNum.length; i++) {
  pressedNum[i].addEventListener('click', () => {
    calculatorDisplay.textContent += pressedNum[i].textContent;
    if (userNumberOne) {
      userNumberTwo = calculatorDisplay.textContent;
    } else if (/[-+/x]/.test(calculatorDisplay.textContent)) {
      filteredDisplayNum = calculatorDisplay.textContent.slice(0, -1);
      myOperator = calculatorDisplay.textContent.slice(-1);
      userNumberOne = filteredDisplayNum;
      calculatorDisplay.textContent = '';
    }
  });
}

//Function to clear the display when AC pressed
const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clearDisplay);

function clearDisplay() {
  calculatorDisplay.textContent = '';
}
//Function to display result when = sign pressed
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  calculatorDisplay.textContent = result(
    userNumberOne,
    myOperator,
    userNumberTwo
  );
});
