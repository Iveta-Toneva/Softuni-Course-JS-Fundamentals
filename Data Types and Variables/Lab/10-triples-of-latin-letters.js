function printLetters(letters) {
  let numberOfLetters = Number(letters);
  for (let first = 97; first < 97 + numberOfLetters; first++) {
    for (let second = 97; second < 97 + numberOfLetters; second++) {
      for (let third = 97; third < 97 + numberOfLetters; third++) {
        console.log(
          `${String.fromCharCode(first)}${String.fromCharCode(
            second
          )}${String.fromCharCode(third)}`
        );
      }
    }
  }
}
printLetters("3");
