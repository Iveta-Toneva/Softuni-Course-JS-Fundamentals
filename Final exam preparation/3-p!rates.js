function pirates(array) {

    let cities = {};
    let command = array.shift();
    while (command !== "Sail") {
        let [city, population, gold] = command.split("||");
        population = Number(population);
        gold = Number(gold);
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [];
            cities[city].push(population);
            cities[city].push(gold);
        } else {
            cities[city][0] += population;
            cities[city][1] += gold;
        }
        command = array.shift();
    }
    command = array.shift();
    while (command !== "End") {

        if (command.startsWith("Plunder")) {
            let [plunder, town, people, gold] = command.split("=>");
            people = Number(people);
            gold = Number(gold);
            if (cities.hasOwnProperty(town)) {
                cities[town][0] -= people;
                cities[town][1] -= gold;
            }
            if (cities[town][0] === 0 || cities[town][1] === 0) {
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            } else {
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }


        } else if (command.startsWith("Prosper")) {

            let [prosper, town, gold] = command.split("=>");

            gold = Number(gold);
            if (gold <= 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[town][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town][1]} gold.`);
            }

        }

        command = array.shift();
    }
     cities=Object.entries(cities);
    
    if (cities.length !== 0) {

        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`);
        for (const [city, array] of cities) {
            console.log(`${city} -> Population: ${array[0]} citizens, Gold: ${array[1]} kg`);
        }
    }

    else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);