import {ADD_TODO, COMPLETE_TODO, DELETE_TODO} from '../actions/todos'

const todos = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case DELETE_TODO:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1, state.length)
      ];
    case COMPLETE_TODO:
      var todos = [...state];
      todos[action.id].completed = true;
      return todos;
    default:
      return state;
  }
};

export default todos
