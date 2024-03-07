function calculations(firstNumber, secondNumber, thirdNumber) {
  let sum = (firstNumber, secondNumber) => firstNumber + secondNumber;
  let resultSum = sum(firstNumber, secondNumber);
  let subtract = (resultSum, thirdNumber) => resultSum - thirdNumber;
  let resultCalculations = subtract(resultSum, thirdNumber);
  return resultCalculations;
}
calculations(23, 6, 10);
