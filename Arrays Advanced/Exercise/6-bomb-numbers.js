function detonateBombs(numbersArray, bombArray) {
  let bombNumber = bombArray[0];
  let bombPower = bombArray[1];
  while (numbersArray.indexOf(bombNumber) !== -1) {
    let index = numbersArray.indexOf(bombNumber);
    if (index - bombPower >= 0) {
      numbersArray.splice(index - bombPower, bombPower * 2 + 1);
    } else {
      numbersArray.splice(0, bombPower * 2 + 1);
    }
  }

  let sumLeftElements = 0;
  for (const el of numbersArray) {
    sumLeftElements += el;
  }
  console.log(sumLeftElements);
}
detonateBombs([1, 4, 4, 2, 8, 9, 1], [9, 3]);
