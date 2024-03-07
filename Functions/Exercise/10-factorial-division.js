function factorialDivision(firstNumber, secondNumber) {
  let firstResult = calculateFactorial(firstNumber);
  let secondResult = calculateFactorial(secondNumber);
  let division = firstResult / secondResult;
  return division.toFixed(2);

  function calculateFactorial(number) {
    let result = 1;
    for (let index = 1; index <= number; index++) {
      result *= index;
    }
    return result;
  }
}
factorialDivision(5, 2);

