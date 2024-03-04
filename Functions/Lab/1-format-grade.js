function formatGrade(grade) {
  let gradeDescription = "";
  if (grade < 3.0) {
    gradeDescription = "Fail";
  } else if (grade >= 3 && grade < 3.5) {
    gradeDescription = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    gradeDescription = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    gradeDescription = "Very good";
  } else if (grade >= 5.5) {
    gradeDescription = "Excellent";
  }
  if(gradeDescription==="Fail"){
    console.log(`Fail (2)`);
  }else{
    console.log(`${gradeDescription} (${grade.toFixed(2)})`);
  }
}
formatGrade(4.5);
