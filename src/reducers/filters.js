import { SET_SHOW_COMPLETED_FILTER } from '../actions/filters'

const filters = (state = {showCompleted: true}, action = {}) => {
  switch (action.type) {
    case SET_SHOW_COMPLETED_FILTER:
      return {...state, showCompleted: action.filter};
    default:
      return state;
  }
};

export default filters
