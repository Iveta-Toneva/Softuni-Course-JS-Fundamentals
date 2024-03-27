function stringOccurrences(sentence,word){

    let count=sentence.split(" ")
    .filter(w=>w===word).length;

    console.log(count);

}
stringOccurrences('This is a word and it also is a sentence',
'is');