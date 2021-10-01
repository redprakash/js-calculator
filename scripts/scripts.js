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
      filteredDisplayNum = calculatorDisplay.textContent.slice(0, -1);
      myOperator = calculatorDisplay.textContent.slice(-1);
      allOperator.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === myOperator) {
          btn.classList.add('selected-operator');
        }
      });
      userNumberOne = filteredDisplayNum;

      calculatorDisplay.textContent = '';
    }
  });
}

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
//Function to clear the display when AC pressed
const allClear = document.querySelector('.clear');
allClear.addEventListener('click', clearDisplay);

function clearDisplay() {
  calculatorDisplay.textContent = '';
}
//Function to display result when = sign pressed
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  if (calculatorDisplay.textContent === '') {
    alert('Nothing to calculate');
  } else {
    calculatorDisplay.textContent = result(
      userNumberOne,
      myOperator,
      userNumberTwo
    );

    allOperator.forEach((btn) => {
      btn.disabled = false;
      btn.classList.remove('selected-operator');
    });
  }
});
