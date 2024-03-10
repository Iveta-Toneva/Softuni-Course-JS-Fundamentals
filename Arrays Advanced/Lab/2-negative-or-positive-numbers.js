function sortNumbers(array) {
  let sortedArray = [];
  for (let index = 0; index < array.length; index++) {
    let currentNumber = Number(array[index]);
    if (currentNumber < 0) {
      sortedArray.unshift(currentNumber);
    } else {
      sortedArray.push(currentNumber);
    }
  }
  for (let index = 0; index < sortedArray.length; index++) {
    console.log(sortedArray[index]);
  }
}
sortNumbers(["7", "-2", "8", "9"]);
