function partyTrack(array) {

    let vipList = [];
    let regularList = [];

    let currentGuest = array.shift();
    while (currentGuest !== "PARTY") {

        if (!isNaN(currentGuest[0])) {
            vipList.push(currentGuest);
        } else {
            regularList.push(currentGuest);
        }
        currentGuest = array.shift();
    }

    let guestList = vipList.concat(regularList);

    for (const guest of array) {
        let index = guestList.indexOf(guest);
        guestList.splice(index, 1);
    }

    console.log(guestList.length);
    for (const guest of guestList) {
        console.log(guest);
    }
}
partyTrack([
    '7IK9Yo0h',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc', 'tSzE5t0p',
    'PARTY', '9NoBUajQ',
    'Ce8vwPmE', 'SVQXQCbc']);