'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели? Введите число!', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let lastFilmName = prompt('Один из последних просмотренных фильмов?', '');

        while (!lastFilmName || lastFilmName.length < 1 || lastFilmName.length > 50) {
            lastFilmName =
                prompt('Один из последних просмотренных фильмов? Введите название фильма от 1 до 50 символов', '');
        }

        let lastFilmRating = prompt('На сколько оцените его?', '');

        while (!lastFilmRating || lastFilmRating.length < 1 || lastFilmRating.length > 50) {
            lastFilmRating =
                prompt('На сколько оцените его? Введите оценку от 1 до 50 символов', '');
        }

        personalMovieDB.movies[lastFilmName] = lastFilmRating;
    };
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (numberOfFilms > 30) {
        alert("Вы киноман");
    } else {
        alert("Вы классический зритель");
    };
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let yourGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

        while (!yourGenres || yourGenres.length < 1 || yourGenres.length > 50) {
            yourGenres =
                prompt(`Ваш любимый жанр под номером ${i + 1} Введите название от 1 до 50 символов`, '');
        }

        personalMovieDB.genres[i] = yourGenres;
    }
}

start();

rememberMyFilms();

writeYourGenres();

detectPersonalLevel();

showMyDB();