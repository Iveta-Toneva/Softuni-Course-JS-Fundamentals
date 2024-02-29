function arrayRotation(array, rotations) {
  let changedArray = [];
  while (rotations >= 1) {
    for (let index = 0; index < array.length; index++) {
      if (index === array.length - 1) {
        changedArray[index] = array[0];
      } else {
        changedArray[index] = array[index + 1];
      }
    }
    array = changedArray;
    changedArray = [];
    rotations--;
  }
  console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
