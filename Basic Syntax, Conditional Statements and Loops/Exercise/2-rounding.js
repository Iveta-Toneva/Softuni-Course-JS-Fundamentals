function printRoundedNumber(number, precision) {
  let currentNumber = number;
  let currentPrecision = precision;
  if (currentPrecision > 15) {
    currentPrecision = 15;
  }
  currentNumber = currentNumber.toFixed(currentPrecision);
  console.log(parseFloat(currentNumber));
}
printRoundedNumber(3.1415926535897932384626433832795,2);
