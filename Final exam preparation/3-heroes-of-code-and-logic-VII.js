function heroesOfCodeAndLogic(array) {

    let heroes = {};
    let heroesCount = Number(array.shift());
    for (let index = 0; index < heroesCount; index++) {
        let currentLine = array.shift();
        let [name, hitPoints, manaPoints] = currentLine.split(" ");
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);
        heroes[name] = {
            hitPoints: hitPoints,
            manaPoints: manaPoints,
        };
    }
    let command = array.shift();
    while (command !== "End") {
        command = command.split(" - ");
        let commandName = command[0];
        let hero = command[1];
        if (commandName === "CastSpell") {
            let manaPoints = Number(command[2]);
            let spellName = command[3];
            if (heroes[hero].manaPoints >= manaPoints) { //check here if there is an error!!!!!
                heroes[hero].manaPoints -= manaPoints;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].manaPoints} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (commandName === "TakeDamage") {
            let damage = Number(command[2]);
            let attacker = command[3];
            heroes[hero].hitPoints -= damage;
            if (heroes[hero].hitPoints > 0) {
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hitPoints} HP left!`);
            } else {
                delete heroes[hero];
                console.log(`${hero} has been killed by ${attacker}!`);
            }
        } else if (commandName === "Recharge") {
            let amount = Number(command[2]);
            if (heroes[hero].manaPoints + amount > 200) {
                console.log(`${hero} recharged for ${200 - heroes[hero].manaPoints} MP!`);
                heroes[hero].manaPoints = 200;
            } else {
                heroes[hero].manaPoints += amount;
                console.log(`${hero} recharged for ${amount} MP!`);
            }

        } else if (commandName === "Heal") {
            let amount = Number(command[2]);

            if (heroes[hero].hitPoints + amount > 100) {
                console.log(`${hero} healed for ${100 - heroes[hero].hitPoints} HP!`);
                heroes[hero].hitPoints = 100;
            } else {
                heroes[hero].hitPoints += amount;
                console.log(`${hero} healed for ${amount} HP!`);
            }

        }
        command = array.shift();
    }

    for (const hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hitPoints}`);
        console.log(`  MP: ${heroes[hero].manaPoints}`);
    }
}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);