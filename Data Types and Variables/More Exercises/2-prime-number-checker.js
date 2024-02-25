function primeNumberChecker(number) {
  let isPrime = true;
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      isPrime = false;
      break;
    }
  }
  isPrime === true ? console.log("true") : console.log("false");
}
primeNumberChecker(7);
