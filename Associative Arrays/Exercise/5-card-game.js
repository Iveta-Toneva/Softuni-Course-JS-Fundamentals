function cards(array) {

    const players = {};

    for (const line of array) {

        let [player, cards] = line.split(": ");
        cards = cards.split(", ");
        let currentSet = new Set(cards);

        if (players[player]) {
            for (const card of cards) {
                players[player].add(card);
            }
        }
        else {
            players[player] = currentSet;
        }
    }

    let playersArray = Object.entries(players);

    for (const [player, cards] of playersArray) {

        let sum = 0;

        for (const card of cards) {
            if (card.length === 3) {
                let firstValue = 10;
                let secondValue = 0;
                if (card[2] === "S") {
                    secondValue = 4;
                } else if (card[2] === "H") {
                    secondValue = 3;
                } else if (card[2] === "D") {
                    secondValue = 2;
                } else if (card[2] === "C") {
                    secondValue = 1;
                }
                sum += firstValue * secondValue;
                continue;
            }
            let char = card[0].charCodeAt();
            let secondValue = 0;
            if (card[1] === "S") {
                secondValue = 4;
            } else if (card[1] === "H") {
                secondValue = 3;
            } else if (card[1] === "D") {
                secondValue = 2;
            } else if (card[1] === "C") {
                secondValue = 1;
            }
            if (char >= 48 && char <= 57 || card[0] === "10") {
                let value = Number(card[0]);
                sum += value * secondValue;
            } else {
                if (card[0] === "J") {
                    sum += secondValue * 11;
                } else if (card[0] === "Q") {
                    sum += secondValue * 12;
                }
                else if (card[0] === "K") {
                    sum += secondValue * 13;
                }
                else if (card[0] === "A") {
                    sum += secondValue * 14;
                }

            }
        }

        players[player] = sum;

    }

    for (const [player, points] of Object.entries(players)) {
        console.log(`${player}: ${points}`);
    }
}
cards([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);