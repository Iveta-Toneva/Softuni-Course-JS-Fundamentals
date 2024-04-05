function imitationGame(array) {

    let message = array.shift();
    let command = array.shift();
    while (command !== "Decode") {

        command = command.split("|");
        if (command[0] === "Move") {
            let count = Number(command[1]);
            let lettersToMove = message.substring(0, count);
            message = message.substring(count) + lettersToMove;
        } else if (command[0] === "Insert") {
            let index = Number(command[1]);
            let letters = command[2];
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index);
            message = firstPart + letters + secondPart;
        } else if (command[0] === "ChangeAll") {
            let substr = command[1];
            let replacement = command[2];

            while (message.indexOf(substr) !== -1) {
                message = message.replace(substr, replacement);
            }
        }

        command = array.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);