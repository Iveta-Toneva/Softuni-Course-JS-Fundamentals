function schoolGrades(array) {

    let schoolDiary = {};

    for (const line of array) {
        let currentInfo = line.split(" ");
        let name = currentInfo.shift();
        let grades = currentInfo.map(Number);
        if (schoolDiary[name]) {
            for (let index = 0; index < grades.length; index++) {
                schoolDiary[name].push(grades[index]);
            }
        } else {
            schoolDiary[name] = grades;
        }
    }
    for (const [name, grades] of Object.entries(schoolDiary)) {
        let sum = 0;
        for (let index = 0; index < grades.length; index++) {
            sum += grades[index];
        }
        let average = sum / grades.length;
        schoolDiary[name] = average;
    }
    let schoolDiaryArray = Object.entries(schoolDiary);
    schoolDiaryArray.sort(([namea, averagea], [nameb, averageb]) => namea.localeCompare(nameb));
    for (const [name, average] of schoolDiaryArray) {
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);