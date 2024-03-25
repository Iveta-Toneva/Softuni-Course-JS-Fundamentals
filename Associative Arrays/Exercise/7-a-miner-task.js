function Mineresources(array) {

    let mine = {};

    for (let index = 0; index < array.length; index++) {

        let resource = array[index];
        let quantity = Number(array[++index]);
        if (!mine[resource]) {
            mine[resource] = 0;
        }
        mine[resource] += quantity;

    }

    for (const [resource, quantity] of Object.entries(mine)) {
        console.log(`${resource} -> ${quantity}`);
    }

}
Mineresources([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);