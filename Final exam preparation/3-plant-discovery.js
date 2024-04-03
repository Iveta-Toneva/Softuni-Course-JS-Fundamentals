function plantDiscovery(array) {

    let plants = {};
    let plantsCount = Number(array.shift());
    for (let index = 0; index < plantsCount; index++) {
        let [plant, rare] = array.shift().split("<->");
        rare = Number(rare);
        if (!plants[plant]) {
            plants[plant] = [];
            plants[plant].push(rare);
        } else {
            plants[plant][0] = rare;
        }
    }

    let command = array.shift();
    while (command !== "Exhibition") {

        if (command.startsWith("Rate")) {
            let [plant, rating] = command.split("Rate: ").join("").split(" - ");
            rating = Number(rating);
            if (!plants[plant]) {
                console.log("error");
            } else {
                plants[plant].push(rating);
            }

        }
        else if (command.startsWith("Update")) {
            let [plant, rare] = command.split("Update: ").join("").split(" - ");
            rare = Number(rare);
            if (!plants[plant]) {
                console.log("error");
            } else {
                plants[plant][0] = rare;
            }

        } else if (command.startsWith("Reset")) {
            let plant = command.split(": ")[1];
            if (!plants[plant]) {
                console.log("error");
            } else {
                let plantsRare = plants[plant][0];
                plants[plant] = [];
                plants[plant].push(plantsRare);
            }
        }
        command = array.shift();
    }
    plants = Object.entries(plants);
    console.log(`Plants for the exhibition:`);
    for (const [plant, array] of plants) {

        let rare = array.shift();
        let average = 0;
        if (array.length > 0) {
            for (const rating of array) {
                average += rating;
            }
            average = average / array.length;
        }

        console.log(`- ${plant}; Rarity: ${rare}; Rating: ${average.toFixed(2)}`);
    }

}
plantDiscovery(["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]);