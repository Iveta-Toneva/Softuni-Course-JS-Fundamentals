function pointsValidation(array) {
  let x1 = array[0];
  let y1 = array[1];
  let x2 = array[2];
  let y2 = array[3];
  let resultForx1y1 = validation(x1, y1);
  let resultForx2y2 = validation(x2, y2);
  let resultForDistance = isDistanceValid(x1, y1, x2, y2);
  if (resultForx1y1) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (resultForx2y2) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (resultForDistance) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }

  function validation(point1, point2) {
    let result = Math.sqrt(Math.pow(point2 - 0, 2) + Math.pow(point1 - 0, 2));
    if (Number.isInteger(result)) {
      return true;
    } else {
      return false;
    }
  }
  function isDistanceValid(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (Number.isInteger(result)) {
      return true;
    } else {
      return false;
    }
  }
}
pointsValidation([0, 0, 0, 0]);
