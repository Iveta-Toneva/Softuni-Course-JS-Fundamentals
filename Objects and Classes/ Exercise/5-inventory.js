function inventory(arrayInput) {

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroes = [];

    for (let index = 0; index < arrayInput.length; index++) {
        let currentLine = arrayInput[index].split(" / ");
        let heroName = currentLine[0];
        let level = Number(currentLine[1]);
        let items = currentLine[2].split(", ");
        let currentHero = new Hero(heroName, level, items);
        heroes.push(currentHero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const object of heroes) {
        console.log(`Hero: ${object.name}`);
        console.log(`level => ${object.level}`);
        console.log(`items => ${object.items.join(", ")}`);
    }

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);