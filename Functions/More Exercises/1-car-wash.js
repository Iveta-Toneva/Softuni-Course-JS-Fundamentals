function printPercentCarClean(array) {
  let percentClean = 0;
  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index];
    switch (currentCommand) {
      case "soap":
        percentClean += 10;
        break;
      case "water":
        percentClean *= 1.2;
        break;
      case "vacuum cleaner":
        percentClean *= 1.25;
        break;
      case "mud":
        percentClean *= 0.9;
        break;
    }
  }
  console.log(`The car is ${percentClean.toFixed(2)}% clean.`);
}
printPercentCarClean([
  "soap",
  "soap",
  "vacuum cleaner",
  "mud",
  "soap",
  "water",
]);
