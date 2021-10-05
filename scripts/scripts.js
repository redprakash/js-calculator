let userNumberOne, myOperator, userNumberTwo;
let calculatorDisplay = document.querySelector('.display__userInput');

let pressedNum = document.querySelectorAll('button');
const allOperator = document.querySelectorAll('.operator');

for (let i = 0; i < pressedNum.length; i++) {
  pressedNum[i].addEventListener('click', () => {
    calculatorDisplay.textContent += pressedNum[i].textContent;

    if (userNumberOne) {
      userNumberTwo = calculatorDisplay.textContent;
    } else if (/[-+/x]/.test(calculatorDisplay.textContent)) {
      userNumberOne = calculatorDisplay.textContent.slice(0, -1);
      myOperator = calculatorDisplay.textContent.slice(-1);
      calculatorDisplay.textContent = '';
    }
  });
}

//Function to do the calculation
const calculate = (numberOne, operator, numberTwo) => {

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

//Function to clear the display when AC pressed
const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clearDisplay);

function clearDisplay() {
  calculatorDisplay.textContent = '';
  location.reload();
}
//Function to display result when = sign pressed
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  if (calculatorDisplay.textContent === '') {
    alert('Nothing to calculate');
  } else {
    calculatorDisplay.textContent = calculate(
      userNumberOne,
      myOperator,
      userNumberTwo
    );
    userNumberOne = 0;
    myOperator = '';
    userNumberTwo = 0;

    enableOperators();

  }
});
