function repeatString(string, count) {
  let result = "";
  for (let index = 0; index < count; index++) {
    result += string;
  }
  return result;
}
let returnedResult = repeatString("abc", 3);
console.log(returnedResult);
