function printLoading(number) {
  let percentCount = number / 10;
  let pointsCount = 10 - percentCount;
  if (number !== 100) {
    console.log(
      `${number}% [${"%".repeat(percentCount)}${".".repeat(pointsCount)}]`
    );
    console.log("Still loading...");
  } else {
    console.log("100% complete!");
  }
}
printLoading(50);
