function songList(array) {

    let songs = {};
    let count = Number(array.shift());
    for (let index = 0; index < count; index++) {
        let currentLine = array.shift().split("|");
        let [song, composer, key] = currentLine;
        songs[song] = {
            composer: composer,
            key: key,
        };
    }
    let command = array.shift();
    while (command !== "Stop") {

        if (command.startsWith("Add")) {
            let [add, song, composer, key] = command.split("|");
            if (songs.hasOwnProperty(song)) {
                console.log(`${song} is already in the collection!`);
            } else {
                songs[song] = {
                    composer: composer,
                    key: key,
                };
                console.log(`${song} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command.startsWith("Remove")) {

            let [remove, song] = command.split("|");
            if (!songs[song]) {
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            } else {
                delete songs[song];
                console.log(`Successfully removed ${song}!`);
            }

        } else if (command.startsWith("ChangeKey")) {
            let [changeKey, song, newKey] = command.split("|");
            if (!songs[song]) {
                console.log(`Invalid operation! ${song} does not exist in the collection.`);
            } else {
                songs[song].key = newKey;
                console.log(`Changed the key of ${song} to ${newKey}!`);
            }
        }
        command = array.shift();
    }

    for (const song in songs) {
        console.log(`${song} -> Composer: ${songs[song].composer}, Key: ${songs[song].key}`);
    }

}
songList([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])