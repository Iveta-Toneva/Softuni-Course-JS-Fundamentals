function revealWords(words,sentence){

    let wordsArray=words.split(", ");

    for (const word of wordsArray) {
        let wordLength=word.length;
        sentence=sentence.replace("*".repeat(wordLength),word);
    }

    console.log(sentence);
     
     
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');