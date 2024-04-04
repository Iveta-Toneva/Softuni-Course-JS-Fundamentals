function emojiDetector(array) {

    let text = array.shift();
    let emojiPattern = /(\:{2}|\*{2})(?<name>[A-Z]{1}[a-z]{2,})\1/g;
    let digitsPattern = /\d/g;
    let matches = text.matchAll(emojiPattern);
    let emojiArray = [];
    let digitsArray = [];
    let matchesDigits = text.matchAll(digitsPattern);
    for (const match of matches) {
        emojiArray.push(match[0]);
    }
    for (const match of matchesDigits) {
        digitsArray.push(Number(match));
    }
    let threshold = 1;
    for (const digit of digitsArray) {
        threshold *= digit;
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiArray.length} emojis found in the text. The cool ones are:`);


    for (const emoji of emojiArray) {

        let sum = 0;
        let changedEmoji = emoji;
        changedEmoji = changedEmoji.substring(2, emoji.length - 2);


        for (let index = 0; index < changedEmoji.length; index++) {
            sum += (changedEmoji[index]).charCodeAt();
        }

        if (sum >= threshold) {
            console.log(emoji);
        }
    }

}
emojiDetector(["In the Sofia Zoo there are 311 animals in total!::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21different types of :Snak::Es::. ::Mooning:: **Shy**"]);
