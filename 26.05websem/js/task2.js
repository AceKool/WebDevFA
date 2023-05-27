class Calculator {
  constructor() {
    this.firstNumber = null;
    this.secondNumber = null;
    this.char = null;
  }

  start() {
    this.firstNumber = Number(prompt("Enter the first number:"));
    this.secondNumber = Number(prompt("Enter the second number:"));
    this.char = prompt("Enter an operation (+, -, *, /)");

    this.calculate();
  }

  calculate() {
    let result;

    switch (this.char) {
      case "+":
        result = this.firstNumber + this.secondNumber;
        break;
      case "-":
        result = this.firstNumber - this.secondNumber;
        break;
      case "*":
        result = this.firstNumber * this.secondNumber;
        break;
      case "/":
        if (this.secondNumber === 0) {
          alert("Error: division by zero");
        } else {
          result = this.firstNumber / this.secondNumber;
          alert(result);
        }
        break;
      default:
        alert("Invalid operation");
        break;
    }
  }
}

const calculator = new Calculator();
calculator.start();