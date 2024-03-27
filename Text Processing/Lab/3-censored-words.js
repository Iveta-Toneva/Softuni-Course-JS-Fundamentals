function censoredWords(sentence,word){

    let index=sentence.indexOf(word);
    
    while(index!==-1){
        sentence=sentence.replace(word,"*".repeat(word.length));
        index=sentence.indexOf(word);
    }
    console.log(sentence);

}
censoredWords('A small sentence with some words',
'small');