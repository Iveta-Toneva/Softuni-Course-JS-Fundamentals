function printSubstring(string, startIndex, elements) {

    let substring = "";

    for (let index = startIndex; index < startIndex+elements; index++) {
        substring += string[index];
    }
    console.log(substring);

}
printSubstring('ASentence', 1, 8);