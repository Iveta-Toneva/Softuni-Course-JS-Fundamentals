function passwordGenerator(array) {

    let currentString = array[0].concat(array[1]);
    let randomWord = array[2];

    for (let index = 0; index < currentString.length; index++) {

        let currentLetter = currentString[index];

        if (currentLetter === "a" || currentLetter === "o" || currentLetter === "e" || currentLetter === "i" || currentLetter === "u") {
            if (randomWord.length === 0) {
                randomWord = array[2];
            }
            currentString = currentString.replace(currentLetter, randomWord[0].toUpperCase());
            randomWord = randomWord.substring(1);
        }
    }
    currentString = currentString.split("").reverse().join("");

    console.log(`Your generated password is ${currentString}`);

}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);