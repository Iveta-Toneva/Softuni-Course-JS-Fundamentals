function numberModification(number) {
  let numberAsString = number.toString();
  let sumElements = 0;
  for (let index = 0; index < numberAsString.length; index++) {
    sumElements += Number(numberAsString[index]);
  }
  let average = sumElements / numberAsString.length;
  while (average <= 5) {
    sumElements += 9;
    numberAsString += "9";
    average = sumElements / numberAsString.length;
  }
  console.log(numberAsString);
}
numberModification(101);
