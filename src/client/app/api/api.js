const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'abd4c37a5cef07bca30399bfd8f86cae';

function fetchMoviesByTitle(query) {
  return runFetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURI(query)}`)
    .then(mapMovies);
}

function fetchMovie (id) {
  return runFetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
    .then(mapMovie);
}

function runFetch(url) {
  return fetch(url)
    .then(response =>
      Promise.resolve(response.json())
        .then((json) => {
          if (response.ok) {
            return json;
          }

          throw new Error({ response, json });
        })
    );
}

function mapMovies(result) {
  return result.results.map(mapMovie);
}

function mapMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    releaseYear: movie.release_date ? (new Date(movie.release_date)).getFullYear() : 1900,
    rating: Number(movie.vote_average),
    posterUrl: movie.poster_path,
    description: movie.overview,
    duration: 100
  };
}

export {
  fetchMoviesByTitle,
  fetchMovie
};