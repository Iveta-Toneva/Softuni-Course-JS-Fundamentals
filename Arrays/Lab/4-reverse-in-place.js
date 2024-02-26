function reverceInPlace(array) {
  let output = "";
  for (let index = 0; index < array.length / 2; index++) {
    let tempElement = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = tempElement;
  }
  for (let index = 0; index < array.length; index++) {
    if (index === array.length - 1) {
      output += array[index];
    } else {
      output += array[index] + " ";
    }
  }
  console.log(output);
}
reverceInPlace(["a", "b", "c", "d", "e"]);
