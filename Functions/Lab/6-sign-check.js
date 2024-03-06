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
  } else if (number3 > 0 && number1 < 0 && number2 < 0) {
    result = "Positive";
  } else if (number1 > 0 && number2 > 0 && number3 < 0) {
    result = "Negative";
  } else if (number3 > 0 && number2 > 0 && number1 < 0) {
    result = "Negative";
  } else if (number2 < 0 && number1 > 0 && number3 > 0) {
    result = "Negative";
  }
  console.log(result);
}
signCheck(-5, 1, 1);
