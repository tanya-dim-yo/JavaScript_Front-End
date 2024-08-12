function movies(moviesInput) {
    const moviesList = [];

    for (const movie of moviesInput) {
        const isAddMovieFound = movie.includes('addMovie');
        const isDirectedByFound = movie.includes('directedBy');
        const isOnDateFound = movie.includes('onDate');

        if (isAddMovieFound) {
            const movieName = movie.split(/addMovie /)[1];

            if (!moviesList.some(m => m.name === movieName)) {
                moviesList.push({ name: movieName });
            }
        } else if (isDirectedByFound) {
            const splittedMovie = movie.split(/ directedBy /);
            const movieName = splittedMovie[0];
            const directorName = splittedMovie[1];

            const movieObject = moviesList.find(m => m.name === movieName);

            if (movieObject) {
                movieObject.director = directorName;
            }
        } else if (isOnDateFound) {
            const splittedMovie = movie.split(/ onDate /);
            const movieName = splittedMovie[0];
            const releaseDate = splittedMovie[1];

            const movieObject = moviesList.find(m => m.name === movieName);

            if (movieObject) {
                movieObject.date = releaseDate;
            }
        }
    }

    for (const movie of moviesList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
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
]
);
