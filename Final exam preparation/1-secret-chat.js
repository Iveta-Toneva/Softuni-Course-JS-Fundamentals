function secretChat(array) {

    let message = array.shift();
    let command = array.shift();
    while (command !== "Reveal") {
        command = command.split(":|:");
        let commandWord = command[0];
        if (commandWord === "InsertSpace") {
            let index = Number(command[1]);
            message = message.split("");
            message.splice(index, 0, " ");
            message = message.join("");
            console.log(message);
        } else if (commandWord === "Reverse") {
            let substring = command[1];
            if (message.indexOf(substring) !== -1) {
                message = message.replace(substring, "");
                substring = substring.split("").reverse().join("");
                message += substring;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (commandWord === "ChangeAll") {
            let substring = command[1];
            let replacement = command[2];
            while (message.indexOf(substring) !== -1) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }
        command = array.shift();
    }

    console.log(`You have a new text message: ${message}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);