function race(array) {

    let people = {};
    let regEx = /[^a-zA-Z0-9]+/g;
    let namesRegEx = /[^0-9]/g;
    let distanceRegEx = /[0-9]/g;
    let participants = array.shift().split(", ");
    let command = array.shift();

    while (command !== "end of race") {

        let isInTheList = false;
        command = command.replace(regEx, "");
        let distance = command.replace(namesRegEx, "");
        let name = command.replace(distanceRegEx, "");
        for (const participant of participants) {
            if (name === participant) {
                isInTheList = true;
                break;
            }
        }
        if (isInTheList) {
            let sum = 0;
            for (const digit of distance) {
                sum += Number(digit);
            }
            if (people[name]) {

                people[name] += sum;
            } else {
                people[name] = sum;
            }
        }

        command = array.shift();
    }
    people = Object.entries(people);
    people = people.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${people[0][0]}`);
    console.log(`2nd place: ${people[1][0]}`);
    console.log(`3rd place: ${people[2][0]}`);

}
race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race']);