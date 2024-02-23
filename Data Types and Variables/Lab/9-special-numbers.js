function printIsSpecial(number) {
  for (let index = 1; index <= number; index++) {
    let currentNumberAsString = index.toString();
    let sumOfDigits = 0;
    for (let index = 0; index < currentNumberAsString.length; index++) {
      let currentDigit = Number(currentNumberAsString[index]);
      sumOfDigits += currentDigit;
    }
    sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11
      ? (currentNumberAsString += " -> True")
      : (currentNumberAsString += " -> False");
    console.log(currentNumberAsString);
  }
}
printIsSpecial(15);
