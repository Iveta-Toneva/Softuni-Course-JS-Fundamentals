function nextDay(year, month, day) {
 let currentDate=new Date(year,month-1,day);
 let dayAfterOneDay=new Date(currentDate.setDate(currentDate.getDate()+1));
 let yearPrint=dayAfterOneDay.getFullYear();
 let monthPrint=dayAfterOneDay.getMonth()+1;
 let dayPrint=dayAfterOneDay.getDate();
 console.log(`${yearPrint}-${monthPrint}-${dayPrint}`); 
}
nextDay(2016, 9, 30);
