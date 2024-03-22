function manageMeetings(array) {

    let meetings = {};

    for (const line of array) {
        let [day, name] = line.split(" ");
        if (!meetings.hasOwnProperty(day)) {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
}
manageMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);