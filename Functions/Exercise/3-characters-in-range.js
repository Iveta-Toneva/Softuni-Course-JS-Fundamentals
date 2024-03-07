function printCharactersInRange(firstChar, lastChar) {
  let numberFirstChar = firstChar.charCodeAt();
  let numberLastChar = lastChar.charCodeAt();
  let start = Math.min(numberFirstChar, numberLastChar);
  let end = Math.max(numberFirstChar, numberLastChar);
  let result = "";
  for (let index = start + 1; index < end; index++) {
    if (index + 1 === end) {
      result += String.fromCharCode(index);
    } else {
      result += String.fromCharCode(index) + " ";
    }
  }
  return result;
}
printCharactersInRange("a", "d");
