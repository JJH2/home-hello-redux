import TodoForm from '../components/TodoForm';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Todo from '../actions/index';

class TodoFormContainer extends Component {
    render() {
        return (
            <TodoForm addListItem={this.props.addTodo} />
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(Todo.addListItem(text))
        }
    }
}


export default connect(null, mapDispatchToProps)(TodoFormContainer);