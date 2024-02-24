function calculateTotalAmountSpices(species) {
  let speciesMinimum = species;
  let days = 0;
  let workersConsume = 26;
  let totalAmount = 0;
  while (speciesMinimum >= 100) {
    days++;
    totalAmount += speciesMinimum - workersConsume;
    speciesMinimum -= 10;
  }
  if (totalAmount >= workersConsume) {
    totalAmount -= 26;
  }
  console.log(days);
  console.log(totalAmount);
}
calculateTotalAmountSpices(111);
