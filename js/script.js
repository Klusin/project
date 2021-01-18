"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("сколько фильмо вы смотрели?", '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмо вы смотрели?", '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}



function start() {
    numberOfFilms = +prompt('СКОЛЬКО ФИЛЬМОВ ВЫ УЖЕ СМОТРЕЛИ', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('СКОЛЬКО ФИЛЬМОВ ВЫ УЖЕ СМОТРЕЛИ', '');
    }
}
start();

function rememberMyfilm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('один из последних просмотренных фильмов', ''),
             b = prompt('на сколько вы его оцениваете', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}
rememberMyfilm();
function DetectPersonalLevel(){
    if(personalMovieDB.count<10){console.log('ПРОсмотрено мало фильмов')}
    else if(personalMovieDB>=10 && personalMovieDB < 30){ console.log('вы классический зритель')}
    else if (personalMovieDB>= 30){console.log('вы киноман')}
    else{console.log ('произошла ошибка')}
}
DetectPersonalLevel();
function showMyDb(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.privat);
function writeYouGenres(){
    for(let i=1;i<4;i++){
        const genre = prompt(`ваш любимый жанр по порядку?${i}`);
        personalMovieDB.genres[i-1] =genre;
    }
}
writeYouGenres();