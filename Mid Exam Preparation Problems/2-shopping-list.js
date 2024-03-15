function shoppingList(array) {
  let productsArray = array.shift().split("!");
  for (let index = 0; index < array.length; index++) {
    let currentLine = array[index];
    if (currentLine === "Go Shopping!") {
      break;
    } else {
      currentLine = array[index].split(" ");
    }
    let currentWordCommand = currentLine[0];
    let product = currentLine[1];
    if (currentWordCommand === "Urgent") {
      if (productsArray.indexOf(product) === -1) {
        productsArray.unshift(product);
      }
    } else if (currentWordCommand === "Unnecessary") {
      let indexProduct = productsArray.indexOf(product);
      if (indexProduct !== -1) {
        productsArray.splice(indexProduct, 1);
      }
    } else if (currentWordCommand === "Correct") {
      let oldProduct = product;
      let newProduct = currentLine[2];
      let indexOldProduct = productsArray.indexOf(oldProduct);
      if (indexOldProduct !== -1) {
        productsArray[indexOldProduct] = newProduct;
      }
    } else if (currentWordCommand === "Rearrange") {
      let indexProductRearange = productsArray.indexOf(product);
      if (indexProductRearange !== -1) {
        productsArray.splice(indexProductRearange, 1);
        productsArray.push(product);
      }
    }
  }
  console.log(productsArray.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
