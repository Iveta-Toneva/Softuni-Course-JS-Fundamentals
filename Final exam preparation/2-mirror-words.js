function mirrorWords(array) {

    let pattern = /([@|#]){1}(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let text = array.shift();
    let matches = text.matchAll(pattern);
    let words = {};
    let count = 0;
    let output = "";
    for (const match of matches) {
        count++;
        let firstWord = match.groups.first;
        let secondword = match.groups.second;
        let reversedFirstWord = firstWord.split("").reverse().join("");
        if (reversedFirstWord === secondword) {
            words[firstWord] = secondword;
        }
    }
    if (count === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${count} word pairs found!`);
    }
    let wordArray = Object.entries(words);
    if (wordArray.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are:`);
        for (const [key, value] of wordArray) {
            output += `${key} <=> ${value}, `;
        }
    }
    output = output.substring(0, output.length - 2);
    console.log(output);

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);