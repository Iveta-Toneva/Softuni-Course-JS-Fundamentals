function printNumbersFromMToN(start,end) {
  let currentStart=start;
  let currentEnd=end;
  for (let index = currentStart; index >= currentEnd; index--) {
    console.log(index);
  }
}
printNumbersFromMToN(6, 2);
