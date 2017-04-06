import {
  GET_MOVIES_START,
  GET_MOVIES_ERROR,
  GET_MOVIES_SUCCESS,
} from 'actions/movies';

const initialState = {
  isLoading: true,
  errorMessage: null,
  movies: [],
  paging: {
    page: 1,
    isLastPage: false,
  },
};

const actionsMap = {
  [GET_MOVIES_START]: state => {
    return Object.assign({}, state, {
      isLoading: true,
    });
  },
  [GET_MOVIES_ERROR]: (state, action) => {
    return Object.assign({}, state, {
      isLoading: false,
      errorMessage: action.error,
    });
  },
  [GET_MOVIES_SUCCESS]: (state, action) => {
    const currentTotalMovies = state.movies.length + action.response.Search.length;
    return Object.assign({}, state, {
      isLoading: false,
      paging: Object.assign({}, state.paging, {
        page: state.paging.page + 1,
        isLastPage: currentTotalMovies === parseInt(action.response.totalResults, 10),
      }),
      movies: Array.prototype.concat([], state.movies, action.response.Search),
      errorMessage: null,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
