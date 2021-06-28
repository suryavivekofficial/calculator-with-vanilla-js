class Calculator {
  constructor(input) {
    this.input = input;
  }

  appendNumber(input, number) {
    if (number === "." && input.innerText.includes(".")) {
      return;
    } else {
      input.innerText += number;
    }
  }

  appendOperation(operator, operations) {
    this.input.innerText += operator;
    console.log(input.innerText);
    this.checkOperation(operator, operations);
  }

  checkOperation(operator, operations) {
    let flag = 0;
    for (let i = 0; i < input.innerText.length; i++) {
      for (let j = 0; j < operations.length; j++) {
        if (input.innerText[i] === operations[j]) {
          flag += 1;

          break;
        }
      }
    }
    if (flag === 2) {
      // operate();
      console.log(`operating the numbers ${operator} and ${flag}`);
    } else {
      console.log(`Appending operator ${operator} and ${flag}`);
    }
  }

  operate() {
    // Operations of the numbers goes here...
  }
  reset(input) {
    input.innerText = ``;
  }

  delete() {
    // input.innerText -=  input.innerText.length
  }
}

//Selections
const numbers = document.querySelectorAll("[data-number]");
const input = document.querySelector("[data-input]");
const operations = document.querySelectorAll("[data-operation]");
const resetBtn = document.querySelector("[data-reset]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");

//Converting innerText of operations to an array
const operatorArray = [];
Object.values(operations).forEach((ele) => operatorArray.push(ele.innerText));

//Appending numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(input, number.innerText);
  });
});

//Appending operators
operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.appendOperation(operation.innerText, operatorArray);
  });
});

//Reset Button
resetBtn.addEventListener("click", () => calculator.reset(input));

//Delete Button
deleteBtn.addEventListener("click", () => {
  console.log(input.innerText.length);
});

const calculator = new Calculator(input);
