function processOddNumbers(arrayNumbers) {
  let newArrNumbers = arrayNumbers
    .filter((number, index) => index % 2 !== 0)
    .map((number) => number * 2)
    .reverse();
  console.log(newArrNumbers.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
