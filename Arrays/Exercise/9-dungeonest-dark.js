function dungeonestDark(input) {
  let health = 100;
  let coins = 0;
  let inputAsString = input.toString();
  let arrayElements = inputAsString.split("|");
  let roomCount = 0;
  for (let index = 0; index < arrayElements.length; index++) {
    roomCount++;
    let currentElement = arrayElements[index].split(" ");
    let room = currentElement[0];
    let numberRoom = Number(currentElement[1]);
    if (room === "potion") {
      if (health + numberRoom > 100) {
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
      } else {
        health+=numberRoom;
        console.log(`You healed for ${numberRoom} hp.`);
      }
      if (health > 100) {
        health = 100;
      }
      console.log(`Current health: ${health} hp.`);
    } else if (room === "chest") {
      coins += numberRoom;
      console.log(`You found ${numberRoom} coins.`);
    } else {
      health -= numberRoom;
      if (health > 0) {
        console.log(`You slayed ${room}.`);
      } else {
        console.log(`You died! Killed by ${room}.`);
        console.log(`Best room: ${roomCount}`);
        return;
      }
    }
  }
  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
