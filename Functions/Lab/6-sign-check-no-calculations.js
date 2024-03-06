// function signCheck(number1, number2, number3) {
//   let result = number1 * number2 * number3;
//   print(result);

//   function print(result) {
//     if (result > 0) {
//       console.log("Positive");
//     } else {
//       console.log("Negative");
//     }
//   }
// }
// signCheck(-1, -2, -3);
function signCheck(number1, number2, number3) {
  let result = "";
  if (number1 > 0 && number2 > 0 && number3 > 0) {
    result = "Positive";
  } else if (number1 < 0 && number2 < 0 && number3 < 0) {
    result = "Negative";
  } else if (number1 > 0 && number2 < 0 && number3 < 0) {
    result = "Positive";
  } else if (number2 > 0 && number1 < 0 && number3 < 0) {
    result = "Positive";
  } else if (3 > 0 && number1 < 0 && number2 < 0) {
    result = "Positive";
  }
}
signCheck(-1, -2, -3);
