function movingTarget(array) {
  let targetsArray = array.shift().split(" ").map(Number);
  let index = 0;
  let currentLine = array[index];
  while (currentLine !== "End") {
    currentLine = array[index].split(" ");
    let wordCommand = currentLine[0];
    let currentIndex = Number(currentLine[1]);
    if (wordCommand === "Shoot") {
      let power = Number(currentLine[2]);
      if (currentIndex >= 0 && currentIndex < targetsArray.length) {
        targetsArray[currentIndex] -= power;
        if (targetsArray[currentIndex] <= 0) {
          targetsArray.splice(currentIndex, 1);
        }
      }
    } else if (wordCommand === "Add") {
      let powerToAdd = Number(currentLine[2]);
      if (currentIndex >= 0 && currentIndex < targetsArray.length) {
        targetsArray[currentIndex] += powerToAdd;
      } else {
        console.log(`Invalid placement!`);
      }
    } else if (wordCommand === "Strike") {
      let radius = Number(currentLine[2]);
      if (
        currentIndex - radius >= 0 &&
        currentIndex + radius < targetsArray.length &&
        currentIndex >= 0 &&
        currentIndex < targetsArray.length
      ) {
        targetsArray.splice(currentIndex - radius, radius * 2 + 1);
      } else {
        console.log(`Strike missed!`);
      }
    }

    index++;
    currentLine = array[index];
  }
  console.log(targetsArray.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);
