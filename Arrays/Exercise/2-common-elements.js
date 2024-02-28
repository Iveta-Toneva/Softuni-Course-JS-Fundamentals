function findCommonElements(array1, array2) {
  for (let indexFirst = 0; indexFirst < array1.length; indexFirst++) {
    for (let indexSecond = 0; indexSecond < array2.length; indexSecond++) {
      if (array1[indexFirst] === array2[indexSecond]) {
        console.log(array1[indexFirst]);
        break;
      }
    }
  }
}
findCommonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
