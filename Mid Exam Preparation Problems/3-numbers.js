function numbers(string) {

    let numbersArray=string.split(" ").map(Number);
    let sumElements = 0;
    let biggerElements = [];

    for (let index = 0; index < numbersArray.length; index++) {
        sumElements += numbersArray[index];
    }

    let averageValue = sumElements / numbersArray.length;
    let counterBiggerNumbers = 0;

    for (const element of numbersArray) {
        if (element > averageValue) {
            biggerElements.push(element);
            counterBiggerNumbers++
        }
    }

    if (counterBiggerNumbers > 5) {
        counterBiggerNumbers =5;
    }

    biggerElements.sort((a, b) => b - a);
    let resultArray = biggerElements.slice(0, counterBiggerNumbers);
    if (resultArray.length===0) {
        console.log("No");
    } else {
        console.log(resultArray.join(" "));
    }

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
