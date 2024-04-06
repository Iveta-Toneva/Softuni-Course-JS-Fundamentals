function passwordReset(array) {

    let password = array.shift();
    let command = array.shift();
    while (command !== "Done") {
        if (command === "TakeOdd") {
            password = password.split("")
                .filter((char, index) => index % 2 !== 0)
                .join("");
            console.log(password);
        } else if (command.startsWith("Cut")) {
            let [cut, index, length] = command.split(" ");
            index = Number(index);
            length = Number(length);
            let substring = password.substring(index, index + length);
            password = password.replace(substring, "");
            console.log(password);
        } else if (command.startsWith("Substitute")) {
            let [word, substring, substitute] = command.split(" ");
            if (password.indexOf(substring) === -1) {
                console.log("Nothing to replace!");
            } else {
                while (password.indexOf(substring) !== -1) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            }
        }
        command = array.shift();
    }
    console.log(`Your password is: ${password}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));