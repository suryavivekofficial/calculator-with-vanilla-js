class Calculator {
  constructor(input, operations) {
    this.input = input;
    this.operations = operations;
  }

  appendNumber(input, number) {
    if (number === "." && input.innerText.includes(".")) {
      this.checkDecimal();
    } else {
      input.innerText += number;
    }
  }

  appendOperation(operator) {
    this.input.innerText += operator;
    this.checkOperation();
  }

  checkOperation() {
    let flag = 0;
    for (let i = 0; i < input.innerText.length; i++) {
      for (let j = 0; j < this.operations.length; j++) {
        if (input.innerText[i] === this.operations[j]) {
          flag += 1;
          break;
        }
      }
    }
    if (flag >= 2) {
      this.slicing();
    }
  }

  slicing() {
    const toBeCalculated = this.input.innerText.slice(
      0,
      this.input.innerText.length - 1
    );
    this.operate(toBeCalculated);
  }

  operate(toBeCalculated) {
    let { num1, operator, num2 } = this.returnNumbers(toBeCalculated);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = null;
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
        alert("Invalid Input");
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert("Error");
      this.input.innerText = this.input.innerText.slice(
        0,
        this.input.innerText.length - 1
      );
    } else {
      this.updateDisplay(result);
    }
  }

  returnNumbers(inputNumbers) {
    let num1 = inputNumbers;
    let operator = "";
    let num2 = 0;
    for (let i = 0; i < inputNumbers.length; i++) {
      for (let j = 0; j < this.operations.length; j++) {
        if (inputNumbers[i] === this.operations[j]) {
          num1 = inputNumbers.slice(0, i);
          operator = inputNumbers[i];
          num2 = inputNumbers.slice(i + 1, inputNumbers.length);
          return {
            num1,
            operator,
            num2,
          };
        }
      }
    }
  }

  checkDecimal() {
    const returnedItem = this.returnNumbers(this.input.innerText);
    if (returnedItem.num2.toString().includes(".")) {
      return;
    } else {
      this.input.innerText += ".";
    }
  }

  updateDisplay(result) {
    if (
      this.operations.includes(
        this.input.innerText[this.input.innerText.length - 1]
      )
    ) {
      this.input.innerText = `${result}${
        this.input.innerText[this.input.innerText.length - 1]
      } `;
    } else {
      this.input.innerText = result;
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
    calculator.appendOperation(operation.innerText);
  });
});

//Reset Button
resetBtn.addEventListener("click", () => calculator.reset());

//Delete Button
deleteBtn.addEventListener("click", () => calculator.delete());

//Equals to Button
equalsBtn.addEventListener("click", () => calculator.operate(input.innerText));

const calculator = new Calculator(input, operatorArray);
