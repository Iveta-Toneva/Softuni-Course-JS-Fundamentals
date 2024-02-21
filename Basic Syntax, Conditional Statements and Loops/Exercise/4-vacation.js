function printTotalVacationPrice(groupCount, groupType, day) {
  let currentGroupCount = groupCount;
  let currentGroupType = groupType;
  let currentDay = day;
  let singlePrice = 0;
  switch (currentDay) {
    case "Friday":
      if (currentGroupType === "Students") {
        singlePrice = 8.45;
      } else if (currentGroupType === "Business") {
        singlePrice = 10.9;
      } else if (currentGroupType === "Regular") {
        singlePrice = 15;
      }
      break;
    case "Saturday":
      if (currentGroupType === "Students") {
        singlePrice = 9.8;
      } else if (currentGroupType === "Business") {
        singlePrice = 15.6;
      } else if (currentGroupType === "Regular") {
        singlePrice = 20;
      }
      break;
    case "Sunday":
      if (currentGroupType === "Students") {
        singlePrice = 10.46;
      } else if (currentGroupType === "Business") {
        singlePrice = 16;
      } else if (currentGroupType === "Regular") {
        singlePrice = 22.5;
      }
      break;
  }
  let totalPrice = singlePrice * currentGroupCount;
  if (currentGroupCount >= 30 && currentGroupType === "Students") {
    totalPrice *= 0.85;
  } else if (currentGroupCount >= 100 && currentGroupType === "Business") {
    totalPrice -= 10 * singlePrice;
  } else if (
    currentGroupCount >= 10 && currentGroupCount <= 20 &&
    currentGroupType === "Regular"
  ) {
    totalPrice *= 0.95;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
printTotalVacationPrice(40,
"Regular","Saturday");
