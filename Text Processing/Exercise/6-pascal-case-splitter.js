function splitText(string) {

    let newString = "";

    for (let index = 0; index < string.length; index++) {
        if (index === 0) {
            newString += string[index];
            continue;
        }

        if (index + 1 < string.length) {
            let char = string[index + 1];
            let charCode = char.charCodeAt();
            if (charCode >= 65 && charCode <= 90) {
                newString += string[index] + " ";
            }
            else {
                newString += string[index];
            }
        }
    }
    newString += string[string.length - 1];
    let array = newString.split(" ");
    console.log(array.join(", "));

}
splitText('HoldTheDoor');