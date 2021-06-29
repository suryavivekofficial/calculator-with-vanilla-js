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
    this.checkOperation(operations);
  }

  checkOperation(operations) {
    let flag = 0;
    for (let i = 0; i < input.innerText.length; i++) {
      for (let j = 0; j < operations.length; j++) {
        if (input.innerText[i] === operations[j]) {
          flag += 1;
          break;
        }
      }
    }
    if (flag >= 2) {
      this.slicing(operations);
    }
  }

  slicing(operations) {
    const toBeCalculated = this.input.innerText.slice(
      0,
      this.input.innerText.length - 1
    );
    this.operate(toBeCalculated, operations);
  }

  operate(toBeCalculated, operations) {
    // Operations of the numbers goes here...
    let { num1, operator, num2 } = this.returnNumbers(
      toBeCalculated,
      operations
    );
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = null;
    console.log(operator);
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        alert("something went wrong!");
    }
    console.log(result);
  }

  returnNumbers(inputNumbers, operations) {
    for (let i = 0; i < inputNumbers.length; i++) {
      for (let j = 0; j < operations.length; j++) {
        if (inputNumbers[i] == operations[j]) {
          const num1 = inputNumbers.slice(0, i);
          const operator = inputNumbers[i];
          const num2 = inputNumbers.slice(i + 1, inputNumbers.length);
          return {
            num1,
            operator,
            num2,
          };
        }
      }
    }
  }

  reset() {
    this.input.innerText = ``;
  }

  delete() {
    this.input.innerText = this.input.innerText.slice(
      0,
      this.input.innerText.length - 1
    );
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
resetBtn.addEventListener("click", () => calculator.reset());

//Delete Button
deleteBtn.addEventListener("click", () => calculator.delete());

//Equals to Button
equalsBtn.addEventListener("click", () =>
  calculator.operate(input.innerText, operatorArray)
);

const calculator = new Calculator(input);
