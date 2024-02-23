function integerOrFloat(number1, number2, number3) {
  let number = number1 + number2 + number3;
  let isNumberInteger = Number.isInteger(number);
  isNumberInteger === true ? (number += " - Integer") : (number += " - Float");
  console.log(number);
}
integerOrFloat(9, 100, 1.1);
