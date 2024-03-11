function arrayManipulation(array) {
  let numbersArray = array
    .shift()
    .split(" ")
    .map((el) => Number(el));
  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index].split(" ");
    let command = currentCommand[0];
    if (command === "Add") {
      let numberToAdd = Number(currentCommand[1]);
      numbersArray.push(numberToAdd);
    } else if (command === "Remove") {
      let numberToRemove = Number(currentCommand[1]);
      for (let index = 0; index < numbersArray.length; index++) {
        if (numbersArray[index] === numberToRemove) {
          numbersArray.splice(index, 1);
        }
      }
    } else if (command === "RemoveAt") {
      let indexElement = Number(currentCommand[1]);
      numbersArray.splice(indexElement, 1);
    } else if (command === "Insert") {
      let numberToInsert = Number(currentCommand[1]);
      let insertIndex = Number(currentCommand[2]);
      numbersArray.splice(insertIndex, 0, numberToInsert);
    }
  }
  console.log(numbersArray.join(" "));
}
arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
