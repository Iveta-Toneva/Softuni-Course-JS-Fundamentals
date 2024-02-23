function amazingNumbersPrint(number) {
  let numberAsString = number.toString();
  let sumOfDigits = 0;
  let isAmazing = false;
  for (let index = 0; index < numberAsString.length; index++) {
    let currentDigit = Number(numberAsString[index]);
    sumOfDigits += currentDigit;
  }
  let sumOfDigitsAsString = sumOfDigits.toString();
  for (let index = 0; index < sumOfDigitsAsString.length; index++) {
    let currentDigit = Number(sumOfDigitsAsString[index]);
    if (currentDigit % 9 === 0) {
      isAmazing = true;
      break;
    }
  }
  isAmazing ? (number += " Amazing? True") : (number += " Amazing? False");
  console.log(number);
}
amazingNumbersPrint(1233);
