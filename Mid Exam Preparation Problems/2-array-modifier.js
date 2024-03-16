function arrayModifier(array) {

    let numbersArray = array.shift().split(" ").map(Number);
    for (let index = 0; index < array.length; index++) {
        if (array[index] === "end") {
            break;
        }
        let currentLine = array[index].split(" ");
        let wordCommand = currentLine[0];
        let firstIndex = Number(currentLine[1]);
        let secondIndex = Number(currentLine[2]);
        if (wordCommand === "swap") {
            let firstElement = numbersArray[firstIndex];
            let secondElement = numbersArray[secondIndex];
            numbersArray.splice(firstIndex, 1, secondElement);
            numbersArray.splice(secondIndex, 1, firstElement);
        } else if (wordCommand === "multiply") {
            let elementToInsert = numbersArray[firstIndex] * numbersArray[secondIndex];
            numbersArray.splice(firstIndex, 1, elementToInsert);
        } else if (wordCommand === "decrease") {
            let newArray = numbersArray.map(num => num - 1);
            numbersArray = newArray;
        }

    }
    console.log(numbersArray.join(", "));

}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);