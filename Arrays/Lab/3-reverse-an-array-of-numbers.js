function reverseArray(number, array) {
  let reversedArray = [];
  let output = "";
  for (let index = 0; index < number; index++) {
    reversedArray[index] = array[number - 1 - index];
  }
  for (let index = 0; index < reversedArray.length; index++) {
    if (index === reversedArray.length - 1) {
      output += reversedArray[index];
    } else {
      output += reversedArray[index] + " ";
    }
  }
  console.log(output);
}
reverseArray(3, [10, 20, 30, 40, 50]);
