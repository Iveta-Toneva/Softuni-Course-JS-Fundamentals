function calculatePrice(product, quantity) {
  let singlePrice = 0;
  let totalPrice = 0;
  switch (product) {
    case "coffee":
      singlePrice = 1.5;
      break;
    case "water":
      singlePrice = 1.0;
      break;
    case "coke":
      singlePrice = 1.4;
      break;
    case "snacks":
      singlePrice = 2.0;
  }
  totalPrice=singlePrice*quantity;
  console.log(totalPrice.toFixed(2));
}
calculatePrice("water",5);
