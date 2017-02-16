import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'
import { setShowCompletedFilter } from '../actions/filters'

class Form extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (!this.textInput.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.textInput.value));
    this.textInput.value = '';
  }

  changeFilter(e) {
    this.props.dispatch(setShowCompletedFilter(e.target.checked));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type='checkbox'
                   checked={this.props.filters.showCompleted}
                   onChange={this.changeFilter}/>
            <label>Show completed todo</label>
          </div>
          <div>
            <input ref={(input) => { this.textInput = input }}/>
            <button type='submit'>Add Todo</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(Form)