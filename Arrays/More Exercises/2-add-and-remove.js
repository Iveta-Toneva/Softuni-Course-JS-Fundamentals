function addAndRemove(array) {
  let numbersArray = [];
  let printNumbersArray = "";
  for (let index = 0; index < array.length; index++) {
    if (array[index] === "add") {
      numbersArray.push(index + 1);
    } else {
      numbersArray.pop();
    }
  }
  if (numbersArray.length === 0) {
    console.log("Empty");
    return;
  }
  for (let index = 0; index < numbersArray.length; index++) {
    if (index === numbersArray.length - 1) {
      printNumbersArray += numbersArray[index];
    } else {
      printNumbersArray += numbersArray[index] + " ";
    }
  }
  console.log(printNumbersArray);
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
