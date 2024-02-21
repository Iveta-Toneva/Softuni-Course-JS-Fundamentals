function login(input) {
  let userName = input[0];
  let password = "";
  let counter = 0;
  for (let index = userName.length - 1; index >= 0; index--) {
    let currentChar = userName[index];
    password += currentChar;
  }
  let index = 1;
  let currentInput = input[index];
  while (currentInput !== password) {
    counter++;
    if (counter === 4) {
      console.log(`User ${userName} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");
    index++;
    currentInput = input[index];
  }
  console.log(`User ${userName} logged in.`);
}
login(["Acer", "login", "go", "let me in", "recA"]);
