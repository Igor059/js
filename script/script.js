
const numberOffFilm = +prompt('Сколько фильмов вы смотрели', '');

const personalDB = {
    count: numberOffFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Последний фильм?',''),
      b = prompt('Оценка',''),
      c =  prompt('Последний фильм?',''),
      d = prompt('Оценка','');

personalDB.movies[a] = b;
personalDB.movies[c] = d;
console.log(personalDB);