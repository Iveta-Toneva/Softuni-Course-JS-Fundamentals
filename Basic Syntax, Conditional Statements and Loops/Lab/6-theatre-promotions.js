function printTicketPrice(day, age) {
  let typeOfTheDay = day;
  let currentAge = age;
  let price = 0;
  switch (typeOfTheDay) {
    case 'Weekday':
      if (currentAge >= 0 && currentAge <= 18) {
        price = 12;
      } else if (currentAge > 18 && currentAge <= 64) {
        price = 18;
      } else if (currentAge > 64 && currentAge <= 122) {
        price = 12;
      } else {
        console.log('Error!');
        return;
      }
      break;
    case 'Weekend':
      if (currentAge >= 0 && currentAge <= 18) {
        price = 15;
      } else if (currentAge > 18 && currentAge <= 64) {
        price = 20;
      } else if (currentAge > 64 && currentAge <= 122) {
        price = 15;
      } else {
        console.log('Error!');
        return;
      }
      break;
    case 'Holiday':
      if (currentAge >= 0 && currentAge <= 18) {
        price = 5;
      } else if (currentAge > 18 && currentAge <= 64) {
        price = 12;
      } else if (currentAge > 64 && currentAge <= 122) {
        price = 10;
      } else {
        console.log('Error!');
        return;
      }
      break;
  }
  console.log(`${price}$`);
}
printTicketPrice('Weekday', 42);
