function keepsTrackGuests(array) {
  let arrayGuests = [];
  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index].split(" ");
    let guestName = currentCommand[0];
    if (currentCommand[2] === "going!") {
      if (arrayGuests.includes(guestName)) {
        console.log(`${guestName} is already in the list!`);
      } else {
        arrayGuests.push(guestName);
      }
    } else if (currentCommand[2] === "not") {
      if (arrayGuests.includes(guestName)) {
        let indexToRemove = arrayGuests.indexOf(guestName);
        arrayGuests.splice(indexToRemove, 1);
      } else {
        console.log(`${guestName} is not in the list!`);
      }
    }
  }
  for (const guest of arrayGuests) {
    console.log(guest);
  }
}
keepsTrackGuests([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
