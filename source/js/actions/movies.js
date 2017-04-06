import api from 'api';

export const GET_MOVIES_START = 'GET_MOVIES_START';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

function getMoviesStart() {
  return {
    type: GET_MOVIES_START,
  };
}

function getMoviesSuccess(response) {
  return {
    type: GET_MOVIES_SUCCESS,
    response,
  };
}

function getMoviesError(error) {
  return {
    type: GET_MOVIES_ERROR,
    error,
  };
}

export function getMovies() {
  return function (dispatch, getState) {
    setTimeout(() => { // timeout so you can appreciate the spinner!
      dispatch(getMoviesStart());

      api.getMovies('star', getState().movies.paging.page)
        .then(response => {
          if (response.Error) {
            return dispatch(getMoviesError(response.Error));
          }
          return dispatch(getMoviesSuccess(response));
        })
        .catch(error => dispatch(getMoviesError(error)));
    }, 500);
  };
}
