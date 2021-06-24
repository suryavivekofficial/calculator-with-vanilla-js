class Calculator {
  constructor() {}
  reset(input) {
    input.innerText = ``;
  }

  delete() {
    // input.innerText -=  input.innerText.length
  }
}
const numbers = document.querySelectorAll("[data-number]");
const input = document.querySelector("[data-input]");
const operations = document.querySelector("[data-operation]");
const resetBtn = document.querySelector("[data-reset]");
const deleteBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    input.innerText += number.innerText;
  });
});

const calculator = new Calculator(input);

resetBtn.addEventListener("click", () => calculator.reset(input));
deleteBtn.addEventListener("click", () => {
  console.log(input.innerText.length);
});
