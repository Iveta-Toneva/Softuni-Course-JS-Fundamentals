function oddOccurrences(string) {

    let words = {};
    let array = string.split(" ").
        map(word => word.toLowerCase());

    for (const word of array) {
        if (!words[word]) {
            words[word] = 0;
        }
        words[word]++;
    }

    let wordsArray = Object.entries(words);
    wordsArray = wordsArray.filter(([word, count]) => (count % 2 !== 0));
    let output = "";
    for (const [word, count] of wordsArray) {
        output += word + " ";
    }
    console.log(output.trimEnd(output));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");