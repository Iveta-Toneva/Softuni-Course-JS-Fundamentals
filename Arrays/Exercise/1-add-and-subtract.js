function addAndSubtract(array) {
  let sumArray = 0;
  let sumModifiedArray = 0;
  let printModifiedArray = "[ ";
  for (let index = 0; index < array.length; index++) {
    let currentNumber = array[index];
    sumArray += currentNumber;

    if (currentNumber % 2 === 0) {
      currentNumber += index;
    } else {
      currentNumber -= index;
    }
    sumModifiedArray += currentNumber;
    array[index] = currentNumber;
  }
  for (let index = 0; index < array.length; index++) {
    if (index === array.length - 1) {
      printModifiedArray += array[index] + " ]";
    } else {
      printModifiedArray += array[index] + ", ";
    }
  }
  console.log(printModifiedArray);
  console.log(sumArray);
  console.log(sumModifiedArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
