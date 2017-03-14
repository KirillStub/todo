import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Task = ({ todo } ) => (
  <div>
    This is page of todo: {todo.text}
  </div>
);

Task.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = (state, ownProps) => {
  return  {
    todo: state.todos[ownProps.params.id]
  }
};

export default connect(mapStateToProps)(Task)