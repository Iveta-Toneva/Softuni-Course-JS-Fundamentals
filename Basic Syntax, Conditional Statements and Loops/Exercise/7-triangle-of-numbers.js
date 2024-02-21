function printTriangleOfNumbers(number) {
  let currentNumber = number;
  for (let row = 1; row <= currentNumber; row++) {
    let currentLine = "";
    for (let col = 1; col <= row; col++) {
      currentLine += row + " ";
    }
    console.log(currentLine);
  }
}
printTriangleOfNumbers(5);
