function parking(array) {

    let cars = {};

    for (const line of array) {
        let [direction, car] = line.split(", ");
        cars[car] = direction;
    }

    let carsArray = Object.entries(cars);
    if (carsArray.length === 0) {
        console.log("Parking Lot is Empty");
        return;
    }
    carsArray = carsArray.filter(([car, direction]) => direction === "IN");
    carsArray.sort(([cara, directiona], [carb, directionb]) => cara.localeCompare(carb));

    for (const [car, direction] of carsArray) {
        console.log(car);
    }

}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);