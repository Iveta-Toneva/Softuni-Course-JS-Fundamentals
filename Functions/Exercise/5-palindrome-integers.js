function isNumberPalindrome(array) {
  for (let index = 0; index < array.length; index++) {
    let currentNumberAsString = array[index].toString();
    let isPalindrome = false;
    let reversedNumberAsString = "";
    for (let index = currentNumberAsString.length - 1; index >= 0; index--) {
      reversedNumberAsString += currentNumberAsString[index];
    }
    if (currentNumberAsString === reversedNumberAsString) {
      isPalindrome = true;
      console.log(isPalindrome);
    } else {
      console.log(isPalindrome);
    }
  }
}
isNumberPalindrome([123, 323, 421, 121]);
