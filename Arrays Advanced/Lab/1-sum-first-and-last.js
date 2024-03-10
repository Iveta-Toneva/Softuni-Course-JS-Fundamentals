function sumFirstAndLastElements(array) {
  let firstElement = array.shift();
  let lastElement = array.pop();
  let result = Number(firstElement) + Number(lastElement);
  console.log(result);
}
sumFirstAndLastElements(["20", "30", "40"]);
