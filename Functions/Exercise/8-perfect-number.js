function isNumberPerfect(number) {
  let sumDivisors = 0;
  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      sumDivisors += index;
    }
  }
  if (sumDivisors === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
isNumberPerfect(6);
