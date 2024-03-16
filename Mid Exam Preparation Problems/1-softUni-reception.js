function softuniReception(array) {

    let numbersArrayInput = array.map(Number);
    let firstEmployeeEfficiency = numbersArrayInput[0];
    let secondEmployeeEfficiency = numbersArrayInput[1];
    let thirdEmployeeEfficiency = numbersArrayInput[2];
    let studentsCount = numbersArrayInput[3];
    let hoursCounter = 0;
    let studentsPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    while (studentsCount > 0) {
        hoursCounter++;
        if (hoursCounter % 4 == 0) {
            continue;
        }
        studentsCount -= studentsPerHour;
    }
    console.log(`Time needed: ${hoursCounter}h.`);


}

softuniReception(['5', '6', '4', '20']);
