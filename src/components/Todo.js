import React, { PropTypes } from 'react'
import { Link } from 'react-router'

require('styles//Todo.scss');

const Todo = ({ clickOnComplete, clickOnDelete, completed, text, id }) => (
  <Link className='todo' to={'/'+id}>
    <div className='todo__text'>{text}</div>
    { completed ? null : <div className='todo__button' onClick={clickOnComplete}>&#10004;</div> }
    <div className='todo__button' onClick={clickOnDelete}>&#10006;</div>
    { completed ? <div className='todo__line'></div> : null }
  </Link>
);

Todo.propTypes = {
  clickOnComplete: PropTypes.func.isRequired,
  clickOnDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo
