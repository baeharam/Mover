const key = 'd5e4a2eb5fb264de1583b6945d203546';
const { Tmdb } = require('tmdb');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mover.cm2sgt2werm4.ap-northeast-2.rds.amazonaws.com',
  user: 'haram',
  password: 'qotktk12',
  database: 'mover',
});

db.connect();

const tmdb = new Tmdb(key);
const korea = 'ko-KR';

const asnycFunc = async () => {

  const { id } = await tmdb.get('movie/latest', { language: korea });
  const movies = [];
  let movieID = 1;
  let photoID = 1;

  for(let i=2; i<=id; i++) {
    const m = {};
    try {
      const movie = await tmdb.get(`movie/${i}`, { language: korea });

      m.title = movie.title;
      m.overview = movie.overview;

      if (movie.overview.length === 0) {
        console.log('줄거리가 없습니다.');
        continue;
      }

      if (movie.posterPath === null) {
        console.log('포스터가 없습니다.');
        continue;
      }

      m.posterPath = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
      m.genres = [];
      movie.genres.forEach((genre) => {
        m.genres.push(genre.name);
      });
      m.runtime = movie.runtime;
      m.releaseDate = movie.releaseDate.split('-')[0];
      m.countries = [];
      movie.productionCountries.forEach((country) => m.countries.push(country.name));
      m.background = `https://image.tmdb.org/t/p/original/${movie.backdropPath}`;

      m.title = m.title.replace(/"/g,"''");
      m.overview = m.overview.replace(/"/g,"''");

      db.query(
        `INSERT INTO movie (
          movie_id,
          movie_title, 
          movie_year, 
          movie_poster, 
          movie_summary,
          movie_time,
          movie_background) VALUES (
            "${movieID}",
            "${m.title}",
            "${m.releaseDate}",
            "${m.posterPath}",
            "${m.overview}",
            "${m.runtime}",
            "${m.background}"
          )`);
      movieID++;

      const images = await tmdb.get(`movie/${i}/images`);
      m.images = [];
      images.backdrops.forEach((image) => m.images.push(`https://image.tmdb.org/t/p/original/${image.filePath}`));
      m.images.forEach((image) => )

      // const videos = await tmdb.get(`movie/${i}/videos`, { language: korea });
      // m.videos = [];
      // videos.results
      // .filter((video) => video.site === 'YouTube')
      // .forEach((video) => m.videos.push(`https://www.youtube.com/watch?v=${video.key}`));

    } catch (e) {
      console.log('영화가 없습니다.');
    }
  }
};

asnycFunc();