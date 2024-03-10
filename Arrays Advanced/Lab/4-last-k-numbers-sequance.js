function arrayNumbers(length, count) {
  let numbers = [1];
  for (let index = 1; index < length; index++) {
    let currentElements = numbers.slice(numbers.length - count);
    if (numbers.length - count <= 0) {
      currentElements = numbers.slice();
    }

    let currentSum = 0;
    for (let index = 0; index < currentElements.length; index++) {
      currentSum += currentElements[index];
    }
    numbers.push(currentSum);
  }
  console.log(numbers.join(" "));
}
arrayNumbers(6, 3);
