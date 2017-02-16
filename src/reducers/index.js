import { combineReducers } from 'redux';
import todos from './todos'
import filters from './filters'

module.exports = combineReducers({
  todos,
  filters
});
