function sumEvenNumbers(array) {
  let result = 0;
  for (number of array) {
    let currentNumber = Number(number);
    if (currentNumber % 2 === 0) {
      result += currentNumber;
    }
  }
  console.log(result);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
