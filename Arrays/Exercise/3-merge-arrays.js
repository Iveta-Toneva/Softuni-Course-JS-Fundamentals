function mergeArrays(array1, array2) {
  let mergedArray = [];
  let printMergedArray = "";
  for (let index = 0; index < array1.length; index++) {
    if (index % 2 === 0) {
      mergedArray.push(Number(array1[index]) + Number(array2[index]));
    } else {
      mergedArray.push(array1[index] + array2[index]);
    }
  }
  for (let index = 0; index < mergedArray.length; index++) {
    if (index === mergedArray.length - 1) {
      printMergedArray += mergedArray[index];
    } else {
      printMergedArray += `${mergedArray[index]} - `;
    }
  }
  console.log(printMergedArray);
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
