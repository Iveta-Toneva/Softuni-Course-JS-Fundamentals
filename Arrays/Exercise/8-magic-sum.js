function magicSum(array, number) {
  for (let index1 = 0; index1 < array.length; index1++) {
    let currentElement = array[index1];
    for (let index2 = index1 + 1; index2 < array.length; index2++) {
      if (currentElement + array[index2] === number) {
        console.log(`${currentElement} ${array[index2]}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
