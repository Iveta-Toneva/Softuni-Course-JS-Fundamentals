function generateKey(array) {

    let key = array.shift();
    let command = array.shift();
    while (command !== "Generate") {
        if (command.startsWith("Contains")) {
            let substring = command.split(">>>")[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command.startsWith("Flip")) {
            let [flip, upperOrLower, startIndex, endIndex] = command.split(">>>");
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let substtringToChange = key.substring(startIndex, endIndex);
            let changedSubstring = substtringToChange;
            if (upperOrLower === "Upper") {
                changedSubstring = changedSubstring.toUpperCase();
            } else if (upperOrLower === "Lower") {
                changedSubstring = changedSubstring.toLowerCase();
            }
            key = key.replace(substtringToChange, changedSubstring);
            console.log(key);
        } else if (command.startsWith("Slice")) {
            let [slice, startIndex, endIndex] = command.split(">>>");
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            let stringToDelete = key.substring(startIndex, endIndex);
            key = key.replace(stringToDelete, "");
            console.log(key);
        }
        command = array.shift();
    }

    console.log(`Your activation key is: ${key}`);

}
generateKey(["abcdefghijklmnopqrstuvwxyz",

    "Slice>>>2>>>6",

    "Flip>>>Upper>>>3>>>14",

    "Flip>>>Lower>>>5>>>7",

    "Contains>>>def",

    "Contains>>>deF",

    "Generate"]);