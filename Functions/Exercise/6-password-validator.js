function passwordValidator(password) {
  let lengthRange = passwordLength(password);
  let isInrange = digitsAndLetters(password);
  let digitsInRange = twoDigits(password);
  if (lengthRange === false) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (isInrange === false) {
    console.log("Password must consist only of letters and digits");
  }
  if (digitsInRange === false) {
    console.log("Password must have at least 2 digits");
  }
  if (digitsInRange && lengthRange && isInrange) {
    console.log("Password is valid");
  }

  function digitsAndLetters(password) {
    let regex = new RegExp(/^[A-Za-z0-9]+$/);
    let result = regex.test(password);
    return result;
  }
  function twoDigits(password) {
    let counter = 0;
    let hasTwoDigits = false;
    for (let index = 0; index < password.length; index++) {
      for (let digit = 0; digit <= 9; digit++) {
        if (Number(password[index]) === digit) {
          counter++;
        }
      }
    }
    if (counter >= 2) {
      hasTwoDigits = true;
    }
    return hasTwoDigits;
  }
  function passwordLength(password) {
    if (password.length >= 6 && password.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
}
passwordValidator("Pa$s$s");
