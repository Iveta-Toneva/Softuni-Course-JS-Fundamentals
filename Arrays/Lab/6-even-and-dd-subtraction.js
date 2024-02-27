function evenAndOddSumSubtraction(array) {
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < array.length; index++) {
    let currentNumber = array[index];
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }
  let result = evenSum - oddSum;
  console.log(result);
}
evenAndOddSumSubtraction([3,5,7,9]);
