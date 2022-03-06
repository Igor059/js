

const personalDB = {
    counpersonalDBt: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        this.counte = +prompt('Сколько фильмов вы смотрели', '');

        while (this.counte == '' || this.counte == null || isNaN(this.counte)) {
            this.counte = +prompt('Сколько фильмов вы смотрели', '');
        }
    },
    personalMovie: () => {
        for(let i = 0; i<=film; i++){
            const a = prompt('Последний фильм?',''),
                  b = prompt('Оценка','');
            personalDB.movies[a] = b;
        }
    },
    personDbToggle: () => {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }
};
