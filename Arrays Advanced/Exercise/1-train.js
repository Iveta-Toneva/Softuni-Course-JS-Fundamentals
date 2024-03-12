function rearangeTrain(array) {
  let trainArray = array
    .shift()
    .split(" ")
    .map((wagon) => Number(wagon));
  let maxCapacityWagon = Number(array.shift());
  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index].split(" ");
    if (currentCommand[0] === "Add") {
      let wagonToAdd = Number(currentCommand[1]);
      trainArray.push(wagonToAdd);
    } else {
      let passengersToAdd = Number(currentCommand[0]);
      for (let index = 0; index < trainArray.length; index++) {
        let currentWagon = trainArray[index];
        if (currentWagon + passengersToAdd <= maxCapacityWagon) {
          let takenSeats = currentWagon + passengersToAdd;
          trainArray.splice(index, 1, takenSeats);
          break;
        }
      }
    }
  }
  console.log(trainArray.join(" "));
}
rearangeTrain([
  "32 54 21 12 4 0 23",
  "75",
  "Add 10",
  "Add 0",
  "30",
  "10",
  "75",
]);
