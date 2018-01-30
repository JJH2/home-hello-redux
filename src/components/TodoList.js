import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        const list = this.props.todos;
        return (
            list.map(item => {
                return <div>{item}</div>
            })
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(TodoList);