const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return 'Error: Division by zero';
  return a / b;
};
const power = (a, b) => a ** b;
const modulus = (a, b) => a % b;

function calculate(num1,operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '^':
      return power(num1, num2);
    case '%':
      return modulus(num1, num2);
    default:
      return 'Error: Invalid operator';
  }
}

console.log(calculate(5, '+', 3)); // Output: 8
console.log(calculate(5, '-', 3)); // Output: 2
console.log(calculate(5, '*', 3)); // Output: 15
console.log(calculate(5, '/', 0)); // Output: Error: Division by zero
console.log(calculate(5, '^', 3)); // Output: 125