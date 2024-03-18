function towns(stringArray) {

    class Town {

        constructor(name, latitude, longitude) {
            this.name = name;
            this.longitude = longitude;
            this.latitude = latitude;
        }
    }

    let townArray = [];

    for (let index = 0; index < stringArray.length; index++) {
        let currentLine = stringArray[index].split(" | ");
        let name = currentLine[0];
        let latitude = Number(currentLine[1]);
        let longitude = Number(currentLine[2])
        let currentTown = new Town(name, latitude, longitude);
        townArray.push(currentTown);
    }

    for (const object of townArray) {
        console.log(`{ town: '${object.name}', latitude: '${object.latitude.toFixed(2)}', longitude: '${object.longitude.toFixed(2)}' }`);
    }

}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);