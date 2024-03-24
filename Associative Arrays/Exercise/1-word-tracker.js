function wordTracker(array) {

    let sentenceWords = {};
    let sentence = array.shift().split(" ");

    for (const word of sentence) {
        sentenceWords[word] = 0;
    }

    for (const word of array) {
        if (sentenceWords.hasOwnProperty(word)) {
            sentenceWords[word]++;
        }
    }

    let sentenceWordsArray = Object.entries(sentenceWords);
    sentenceWordsArray.sort(([worda, counta], [wordb, countb]) => countb - counta);
    for (const [word, count] of sentenceWordsArray) {
        console.log(`${word} - ${count}`);
    }

}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);