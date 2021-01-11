"use strict";
let cat = 'toys';
console.log(`mine ${cat}`);
const numberOfFilms = +prompt("сколько фильмо вы смотрели?",'');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
     genres:[],
     privat:false
}
const a = prompt("какой последний фильм вы смотрели?",''),
      b = prompt('На сколько оцените его?',''),
      c = prompt("какой последний фильм вы смотрели?",''),
      d = prompt('На сколько оцените его?','');
      personalMovieDB.movies[a]=b;
      personalMovieDB.movies[c]=d;
      console.log(personalMovieDB);