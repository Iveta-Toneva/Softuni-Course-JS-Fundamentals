function printMultiplicationTable(number) {
  let currentNumber = number;
  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    let result = currentNumber * multiplier;
    console.log(`${currentNumber} X ${multiplier} = ${result}`);
  }
}
printMultiplicationTable(5);
