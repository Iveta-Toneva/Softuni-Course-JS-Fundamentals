function worldTour(array) {

    let string = array.shift();
    let command = array.shift();
    while (command !== "Travel") {
        command = command.split(":");
        let commandWord = command[0];
        if (commandWord === "Add Stop") {
            let index = Number(command[1]);
            let stop = command[2];
            if (index >= 0 && index < string.length) {
                string = string.split("");
                string.splice(index, 0, stop);
                string = string.join("");
            }
            console.log(string);
        } else if (commandWord === "Remove Stop") {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            if (startIndex >= 0 && endIndex < string.length) {
                let substring = string.substring(startIndex, endIndex + 1);
                string = string.replace(substring, "");
            }
            console.log(string);
        } else if (commandWord === "Switch") {
            let substring = command[1];
            let replacement = command[2];
            let regEx=new RegExp(`${substring}`,`g`);
            string=string.replace(substring,replacement);
            console.log(string);
        }
        command = array.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${string}`);

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);