function printElements(array) {
  let step = Number(array[array.length - 1]);
  let output = "";
  for (let index = 0; index < array.length - 1; index += step) {
    if (index === array.length - 2) {
      output += array[index];
    } else {
      output += array[index] + " ";
    }
  }
  console.log(output);
}
printElements(["5", "20", "31", "4", "20", "2"]);
