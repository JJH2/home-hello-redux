import React, { Component } from 'react';
import TodoFormContainer from '../containers/index';
import TodoList from './TodoList';

export default class Todo extends Component {
    render() {
        return (
            <div>
                <TodoFormContainer />
                <TodoList />
            </div>
        );
    }
}