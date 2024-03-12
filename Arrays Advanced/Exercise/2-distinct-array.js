function removeReapetedElements(array) {
  for (let index = 0; index < array.length; index++) {
    let currentElement = array[index];

    for (let inIndex = index + 1; inIndex < array.length; inIndex++) {
      let numberToCompare = array[inIndex];
      if (currentElement === numberToCompare) {
        array.splice(inIndex, 1);
        index--;
      }
    }
  }
  console.log(array.join(" "));
}
removeReapetedElements([20, 8, 12, 13, 4, 4, 8, 5]);
