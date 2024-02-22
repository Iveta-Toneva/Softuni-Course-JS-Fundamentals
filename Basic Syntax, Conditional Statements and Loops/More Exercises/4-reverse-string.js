function printReverse(string) {
  let currentString = string;
  let reversedString = "";
  for (let index = currentString.length - 1; index >= 0; index--) {
    reversedString+=currentString[index];
  }
  console.log(reversedString);
}
printReverse("Hello");
