function carsInformation(array) {

    let cars = {};
    let carsCount = Number(array.shift());
    for (let index = 0; index < carsCount; index++) {
        let [car, mileAge, fuel] = array.shift().split("|");
        cars[car] = {
            mileAge: Number(mileAge),
            fuel: Number(fuel),
        };
    }
    let command = array.shift();
    while (command !== "Stop") {
        command = command.split(" : ");
        let commandWord = command[0];
        if (commandWord === "Drive") {
            let car = command[1];
            let distance = Number(command[2]);
            let fuel = Number(command[3]);
            if (cars[car].fuel < fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[car].mileAge += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (cars[car].mileAge >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (commandWord === "Refuel") {
            let car = command[1];
            let fuel = Number(command[2]);
            if (cars[car].fuel + fuel > 75) {
                console.log(`${car} refueled with ${75 - cars[car].fuel} liters`);
                cars[car].fuel = 75;
            } else {
                cars[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        } else if (commandWord === "Revert") {
            let car = command[1];
            let kilometers = Number(command[2]);
            cars[car].mileAge -= kilometers;
            if (cars[car].mileAge < 10000) {
                cars[car].mileAge = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }
        command = array.shift();
    }
    for (const car in cars) {
        console.log(`${car} -> Mileage: ${cars[car].mileAge} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
    }

}
carsInformation([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);