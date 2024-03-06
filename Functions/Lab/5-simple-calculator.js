function simpleCalculator(number1, number2, operation) {
  let multiply = (number1, number2) => number1 * number2;
  let divide = (number1, number2) => number1 / number2;
  let add = (number1, number2) => number1 + number2;
  let subtract = (number1, number2) => number1 - number2;
  switch (operation) {
    case "multiply":
      console.log(multiply(number1, number2));
      break;
    case "divide":
      console.log(divide(number1, number2));
      break;
    case "add":
      console.log(add(number1, number2));
      break;
    case "subtract":
      console.log(subtract(number1, number2));
      break;
  }
}
simpleCalculator(5, 5, "multiply");
