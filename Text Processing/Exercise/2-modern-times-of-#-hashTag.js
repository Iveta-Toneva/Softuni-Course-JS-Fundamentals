function printWords(string) {

    let arrayWords = string.split(" ").filter(w => w[0] === "#");

    for (const word of arrayWords) {
        let isValid = true;
        if(word.length===1){
            isValid=false;
        }
        for (let index = 1; index < word.length; index++) {
            let charCode = word[index].charCodeAt();
            if (!(charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122)) {
                isValid = false;
                break;
            }

        }
        if(isValid){
            console.log(word.substring(1));
        }
    }
}
printWords('Nowadays everyone uses # to tag a #special word in #socialMedia');