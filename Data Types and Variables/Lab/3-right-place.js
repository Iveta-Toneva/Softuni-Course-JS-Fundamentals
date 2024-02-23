function rightPlace(string1, char, string2) {
  let currentString1 = string1;
  let currentChar = char;
  let currentString2 = string2;
  currentString1 = currentString1.replace("_", currentChar);
  if (currentString1 === currentString2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
rightPlace("Str_ng", "i", "String");
