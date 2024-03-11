function printSmallestNumbers(arrayNumbers) {
  arrayNumbers.sort((a, b) => a - b);
  let newArr = arrayNumbers.slice(0, 2);
  console.log(newArr.join(" "));
}
printSmallestNumbers([30, 15, 50, 5]);
