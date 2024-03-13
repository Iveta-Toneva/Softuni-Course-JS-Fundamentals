function sorting(numbersArray) {
  let sortedArray = [];
  numbersArray.sort((a, b) => b - a);
  for (let index = 0; index < Math.round(numbersArray.length / 2); index++) {
    sortedArray.push(numbersArray[index]);
    sortedArray.push(numbersArray[numbersArray.length - 1 - index]);
  }
  if (numbersArray.length % 2 !== 0) {
    sortedArray.pop();
  }
  console.log(sortedArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
