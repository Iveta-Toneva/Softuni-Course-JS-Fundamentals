function gladiatorInventory(array) {
  let inventoryArray = array.shift().split(" ");
  for (let index = 0; index < array.length; index++) {
    let currentCommand = array[index].split(" ");
    let command = currentCommand[0];
    let element = currentCommand[1];
    if (command === "Buy") {
      if (inventoryArray.indexOf(element) === -1) {
        inventoryArray.push(element);
      }
    } else if (command === "Trash") {
      let indexElement = inventoryArray.indexOf(element);
      if (indexElement !== -1) {
        inventoryArray.splice(indexElement, 1);
      }
    } else if (command === "Repair") {
      let indexElementToRepair = inventoryArray.indexOf(element);
      if (indexElementToRepair !== -1) {
        inventoryArray.splice(indexElementToRepair, 1);
        inventoryArray.push(element);
      }
    } else if (command === "Upgrade") {
      let elementToUpgrade = element.split("-");
      let el = elementToUpgrade[0];
      let upgrade = elementToUpgrade[1];
      let indexElementToUpdate = inventoryArray.indexOf(el);
      if (indexElementToUpdate !== -1) {
        inventoryArray.splice(indexElementToUpdate + 1, 0, `${el}:${upgrade}`);
      }
    }
  }
  console.log(inventoryArray.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
