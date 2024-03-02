function arrayRotate(array) {
  let rotations = Number(array[array.length - 1]);
  let changedArray = [];
  array.pop();
  while (rotations >= 1) {
    for (let index = 0; index < array.length; index++) {
      if (index === array.length - 1) {
        changedArray[0] = array[array.length - 1];
        break;
      } else {
        changedArray[index + 1] = array[index];
      }
    }
    rotations--;
    array = changedArray;
    changedArray = [];
  }
  console.log(array.join(" "));
}
arrayRotate(["1", "2", "3", "4", "2"]);
