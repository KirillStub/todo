import React, { PropTypes } from 'react'

require('styles//Todo.scss');

const Todo = ({ clickOnComplete, clickOnDelete, completed, text }) => (
  <div className='todo'>
    <div className='todo__text'>{text}</div>
    { completed ? null : <div className='todo__button' onClick={clickOnComplete}>&#10004;</div> }
    <div className='todo__button' onClick={clickOnDelete}>&#10006;</div>
    { completed ? <div className='todo__line'></div> : null }
  </div>
);

Todo.propTypes = {
  clickOnComplete: PropTypes.func.isRequired,
  clickOnDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
