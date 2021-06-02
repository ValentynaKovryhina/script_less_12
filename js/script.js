/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms > 30) {
    alert("Вы киноман");
} else {
    alert("Вы классический зритель");
};

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {

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

console.log(personalMovieDB);