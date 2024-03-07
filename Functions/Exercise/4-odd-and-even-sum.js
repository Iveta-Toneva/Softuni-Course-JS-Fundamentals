function printOddAndEvenSum(number) {
  let numberAsString = number.toString();
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < numberAsString.length; index++) {
    let currentDigit = Number(numberAsString[index]);
    if (currentDigit % 2 === 0) {
      evenSum += currentDigit;
    } else {
      oddSum += currentDigit;
    }
  }
  printResult(evenSum, oddSum);
  function printResult(evenSum, oddSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }
}
printOddAndEvenSum(1000435);
