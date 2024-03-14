function numberSearch(numbersArray, commandArray) {
  let numbersToTake = commandArray[0];
  let numbersToDelete = commandArray[1];
  let searchedNumber = commandArray[2];
  let timesToPop = numbersArray.length - numbersToTake;
  for (let index = 0; index < timesToPop; index++) {
    numbersArray.pop();
  }
  for (let index = 0; index < numbersToDelete; index++) {
    numbersArray.shift();
  }
  let occursCount = 0;
  for (let index = 0; index < numbersArray.length; index++) {
    if (searchedNumber === numbersArray[index]) {
      occursCount++;
    }
  }
  console.log(`Number ${searchedNumber} occurs ${occursCount} times.`);
}
numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
