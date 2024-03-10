function getFirstAndLastElements(array) {
  let elementsToGet = array.shift();
  let firstElements = array.slice(0, elementsToGet);
  let lastElements = array.slice(array.length-elementsToGet);
  console.log(firstElements.join(" "));
  console.log(lastElements.join(" "));
}
getFirstAndLastElements([2, 7, 8, 9]);
