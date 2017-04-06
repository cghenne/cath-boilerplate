import 'es6-promise';
import 'isomorphic-fetch';

function getMovies(search, page) {
  return fetch(`http://www.omdbapi.com/?s=${ search }&y=2016&type=movie&page=${ page }`)
    .then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    });
}

export default {
  getMovies,
};
