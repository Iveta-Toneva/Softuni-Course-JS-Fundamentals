function sumOfOddNumbers(number) {
  let currentNumber=number;
  let sum = 0;
  for (let index = 1; index <= currentNumber * 2; index++) {
    if (index % 2 !== 0) {
      console.log(index);
      sum += index;
    }
  }
  console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);
