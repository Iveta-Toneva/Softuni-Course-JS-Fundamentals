function wordOccurrences(array) {

    let words = {};

    for (const word of array) {

        if (!words.hasOwnProperty(word)) {
            words[word] = 0;
        }

        words[word]++;
    }

    let wordsArray = Object.entries(words);
    wordsArray.sort(([worda, counta], [wordb, countb]) => countb - counta);
    for (const [word, count] of wordsArray) {
        console.log(`${word} -> ${count} times`);
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);