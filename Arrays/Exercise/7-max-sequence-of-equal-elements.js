function maxSequence(array) {
  let sequenceArray = [];
  let bestElement = 0;
  let maxTimes = 0;
  for (let index = 0; index < array.length; index++) {
    let currentElement = array[index];
    let times = 0;
    for (let index2 = index + 1; index2 < array.length; index2++) {
      if (currentElement === array[index2]) {
        times++;
      } else {
        break;
      }
    }
    if (times > maxTimes) {
      maxTimes = times;
      bestElement = currentElement;
    }
  }
  for (let index = 0; index <=maxTimes; index++) {
    sequenceArray.push(bestElement);
  }
  console.log(sequenceArray.join(" "));
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
