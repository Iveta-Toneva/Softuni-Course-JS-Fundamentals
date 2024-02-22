function sortNumbers(number1, number2, number3) {
  let currentNumber1 = number1;
  let currentNumber2 = number2;
  let currentNumber3 = number3;
  let arrayNumbers = [currentNumber1, currentNumber2, currentNumber3];
  arrayNumbers = arrayNumbers.sort((a, b) => a - b);
  for (let index = arrayNumbers.length - 1; index >= 0; index--) {
    console.log(arrayNumbers[index]);
  }
}
sortNumbers(2, 1, 3);
