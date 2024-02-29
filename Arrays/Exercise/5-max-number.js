function findTopIntegers(array) {
  let topIntegers = [];
  let printTopIntegers = "";

  for (let index1 = 0; index1 < array.length; index1++) {
    let tempElement = array[index1];
    let isTopInteger = true;
    for (let index2 = index1 + 1; index2 < array.length; index2++) {
      if (tempElement <= array[index2]) {
        isTopInteger = false;
        break;
      }
    }
    if (isTopInteger) {
      topIntegers.push(tempElement);
    }
  }
  for (let index = 0; index < topIntegers.length; index++) {
    if (index === topIntegers.length - 1) {
      printTopIntegers += topIntegers[index];
    } else {
      printTopIntegers += topIntegers[index] + " ";
    }
  }
  console.log(printTopIntegers);
}
findTopIntegers([41,41,34,20]);
