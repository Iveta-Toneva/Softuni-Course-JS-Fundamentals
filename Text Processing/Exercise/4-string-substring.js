function isWordFound(word, sentence) {

    word = word.toLowerCase();
    let sentenceArray = sentence.split(" ").map(w => w.toLowerCase());
    if (sentenceArray.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
isWordFound('javascript',
    'JavaScript is the best programming language');