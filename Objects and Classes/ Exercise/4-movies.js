function movies(arrayInput) {

    class Movie {
        constructor(name) {
            this.name = name;
        }
        addDirector(director) {
            this.director = director;
        }
        addDate(date) {
            this.date = date;
        }
    }

    let movies = [];
    for (let index = 0; index < arrayInput.length; index++) {
        let currentLine = arrayInput[index];
        if (currentLine.includes("addMovie")) {
            currentLine = currentLine.split(" ");
            currentLine.shift();
            let movie = currentLine.join(" ");
            let currentMovie = new Movie(movie);
            movies.push(currentMovie);
        } else if (currentLine.includes("directedBy")) {
            currentLine = currentLine.split(" directedBy ", 2);
            let movieName = currentLine[0];
            let director = currentLine[1];
            for (const object of movies) {
                if (object.name === movieName) {
                    object.addDirector(director);
                }
            }
        } else if (currentLine.includes("onDate")) {
            currentLine = currentLine.split(" onDate ", 2);
            let movieName = currentLine[0];
            let date = currentLine[1];
            for (const object of movies) {
                if (object.name === movieName) {
                    object.addDate(date);
                }
            }
        }
    }

    let filterMovies = movies.filter(movie => movie.director !== undefined && movie.date !== undefined);
    for (const object of filterMovies) {
        console.log(JSON.stringify(object));
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);