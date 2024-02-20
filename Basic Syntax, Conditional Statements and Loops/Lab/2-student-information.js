function printStudentInformation(name, age, grade) {
  let currentName=name;
  let currentAge=age;
  let currentGrade=grade;
  console.log(`Name: ${currentName}, Age: ${currentAge}, Grade: ${currentGrade.toFixed(2)}`);
}
printStudentInformation('John', 15, 5.54678);
