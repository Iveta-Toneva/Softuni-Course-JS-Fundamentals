function calculateReadingTime(pagesBook, pagesPerHour, days) {
  let totalHourBook = pagesBook / pagesPerHour;
  let hoursPerDay = totalHourBook / days;
  console.log(hoursPerDay);
}
calculateReadingTime(212, 20, 2);
