let answer;

let num1;
let num2 = 20;

let numone = document.querySelector('.display__numone');

let allnumbers = document.querySelectorAll('button');

let displayNum = '';
for (let i = 0; i < allnumbers.length; i++) {
  allnumbers[i].addEventListener('click', () => {
    //numone.innerHTML += allnumbers[i].innerHTML;
    numone.textContent = numone.textContent + allnumbers[i].innerHTML;
    displayNum = displayNum + allnumbers[i].textContent;

    if (/[-+/x]/.test(displayNum)) {
      numone.textContent = '';
      displayNum = displayNum.slice(0, -1);
      num1 = displayNum;
      displayNum = '';
    }
    if (displayNum) {
      console.log(displayNum);
    }
  });
}

const alloperator = document.querySelectorAll('.operator');

// FOR CALCULATIONS
alloperator.forEach((n) =>
  n.addEventListener('click', () => {
    if (n.textContent === '+') {
      answer = parseFloat(num1) + num2;
      console.log(answer);
    } else if (n.textContent === '-') {
      answer = num1 - num2;
      console.log(answer);
    } else if (n.textContent === 'x') {
      answer = num1 * num2;
      console.log(answer);
    } else if (n.textContent === '/') {
      answer = num1 / num2;

      console.log(answer);
    } else {
      alert('something is wrong');
    }
  })
);

//All Clear the display
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
  numone.textContent = '';
}
