function areArraysEqual(array1, array2) {
  let lengthArrays = array1.length;
  let areEqual = true;
  let indexDifference = 0;
  let sumFirstArray = 0;
  for (let index = 0; index < lengthArrays; index++) {
    let currentNumberFirstArray = Number(array1[index]);
    sumFirstArray += currentNumberFirstArray;
    let currentNumberSecondArray = Number(array2[index]);
    if (currentNumberFirstArray !== currentNumberSecondArray) {
      areEqual = false;
      indexDifference = index;
      break;
    }
  }
  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sumFirstArray}`);
  } else {
    console.log(
      `Arrays are not identical. Found difference at ${indexDifference} index`
    );
  }
}
areArraysEqual(['1'], ['10']);
