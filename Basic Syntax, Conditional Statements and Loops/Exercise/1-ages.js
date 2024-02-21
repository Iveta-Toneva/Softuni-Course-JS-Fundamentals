function printAgePhase(age) {
  let currentAge = age;
  if (currentAge >= 0 && currentAge <= 2) {
    console.log("baby");
  } else if (currentAge >= 3 && currentAge <= 13) {
    console.log("child");
  } else if (currentAge >= 14 && currentAge <= 19) {
    console.log("teenager");
  } else if (currentAge >= 20 && currentAge <= 65) {
    console.log("adult");
  } else if (currentAge >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
printAgePhase(2);
