function distanceBetweenPoints(number1, number2, number3, number4) {
  let x1 = number1;
  let y1 = number2;
  let x2 = number3;
  let y2 = number4;
  let resultX = x2 - x1;
  let resultY = y2 - y1;
  let distance = Math.sqrt(resultX * resultX + resultY * resultY);
  console.log(distance);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);
