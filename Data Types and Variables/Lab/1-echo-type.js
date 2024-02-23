function echoType(input) {
  let currentInput = input;
  let type = typeof currentInput;
  console.log(type);
  if (type === "string" || type === "number") {
    console.log(currentInput);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}
echoType(null);
