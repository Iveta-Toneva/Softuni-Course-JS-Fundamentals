function printReversed(char1, char2, char3) {
  let text = char1 + char2 + char3;
  let textReversed = "";
  for (let index = text.length - 1; index >= 0; index--) {
    textReversed += text[index] + " ";
  }
  console.log(textReversed);
}
printReversed("1", "L", "&");
