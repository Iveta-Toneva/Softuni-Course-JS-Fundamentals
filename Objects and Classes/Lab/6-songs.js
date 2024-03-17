function songs(arrayInput) {

    class Song {

        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let songsCount = Number(arrayInput.shift());
    for (let index = 0; index < songsCount; index++) {

        [typeList, songName, time] = arrayInput[index].split("_");
        let song = new Song(typeList, songName, time);
        songs.push(song);
    }

    let wantedTypeList = arrayInput.pop();
    if (wantedTypeList === "all") {
        for (const song of songs) {
            console.log(song.name);
        }
    } else {
        let filterArray = songs.filter(song => song.typeList === wantedTypeList);
        for (const song of filterArray) {
            console.log(song.name);
        }
    }

}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);