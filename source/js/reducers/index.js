import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from 'reducers/movies';

export default combineReducers({
  movies,
  router: routerReducer,
});
