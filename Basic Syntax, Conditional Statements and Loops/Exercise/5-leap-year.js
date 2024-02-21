function printIsLeap(year) {
  let currentYear = year;
  if (currentYear % 4 === 0 && currentYear % 100 !== 0) {
    console.log("yes");
  } else if (currentYear % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
printIsLeap(2003);
