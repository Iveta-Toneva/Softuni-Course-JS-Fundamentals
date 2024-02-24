function digitSum(number) {
  let numberToString = number.toString();
  let sum = 0;
  for (let index = 0; index < numberToString.length; index++) {
    let currentDigit = Number(numberToString[index]);
    sum += currentDigit;
  }
  console.log(sum);
}
digitSum(245678);
