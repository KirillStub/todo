import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { completeTodo, deleteTodo } from '../actions/todos'
import Todo from '../components/Todo'

require('styles//TodoList.scss');

const TodoList = ({ todos, dispatch }) => (
  <div className='todoList'>
    {todos.map((todo, id )=>
        <div className='todoList__todo' key={id}>
          <Todo completed={todo.completed}
                text={todo.text}
                clickOnComplete={() => dispatch(completeTodo(id))}
                clickOnDelete={() => dispatch(deleteTodo(id))}
                id={id}/>
        </div>
    )}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
};

const applyFilter = (todos, filter) => {
  if (filter) {
    return todos;
  }
  return todos.filter(t => !t.completed);
};

const mapStateToProps = (state) => {
  return {
    todos: applyFilter(state.todos, state.filters.showCompleted)
  }
};

export default connect(mapStateToProps)(TodoList)
