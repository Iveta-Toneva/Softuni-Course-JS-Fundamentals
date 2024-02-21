function printAndSum(start, end) {
  let currentStart = start;
  let currentEnd = end;
  let sum = 0;
  let output = "";
  for (let index = currentStart; index <= currentEnd; index++) {
    let currentNumber = index;
    output += currentNumber + " ";
    sum += currentNumber;
  }
  console.log(output);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
