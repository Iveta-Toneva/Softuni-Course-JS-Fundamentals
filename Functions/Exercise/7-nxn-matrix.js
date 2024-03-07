function printMatrix(n) {
  for (let index = 0; index < n; index++) {
    let printLine = "";
    for (let index = 0; index < n; index++) {
      printLine += n + " ";
    }
    console.log(printLine);
  }
}
printMatrix(5);
