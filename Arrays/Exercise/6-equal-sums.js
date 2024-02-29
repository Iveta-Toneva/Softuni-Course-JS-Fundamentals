function equalSums(array) {
    if (array.length === 1) {
      console.log(0);
      return;
    }
    let rightSum = 0;
    for (let index1 = 0; index1 < array.length; index1++) {
      let currentElement = array[index1];
      let leftSum = 0;
      for (let index2 = index1 + 1; index2 < array.length; index2++) {
        let currentNumber = array[index2];
        leftSum += currentNumber;
        if (rightSum === leftSum && index2 &&index2!==array.length-1) {
          console.log(index2);
          return;
        }
      }
      if (leftSum === rightSum) {
        console.log(index1);
        return;
      } else {
        rightSum += currentElement;
      }
    }
    console.log("no");
  }
  equalSums([1,2,3]);