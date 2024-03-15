function blackFlag(arrayInput) {
  let daysOfPlunder = Number(arrayInput[0]);
  let dailyPlunder = Number(arrayInput[1]);
  let expectedPlunder = Number(arrayInput[2]);
  let daysCounter = 0;
  let collectedPlunder = 0;
  while (daysCounter < daysOfPlunder) {
    daysCounter++;
    collectedPlunder += dailyPlunder;
    if (daysCounter % 3 === 0) {
      collectedPlunder += 0.5 * dailyPlunder;
    }
    if (daysCounter % 5 === 0) {
      collectedPlunder *= 0.7;
    }
  }
  if (collectedPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentCollect = (collectedPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentCollect.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["5", "40", "100"]);
