import React, { Component } from 'react';
import styled from 'styled-components';
import { Provider, connect } from 'react-redux';
import { store } from '../reducers/Todos';

const TodoListItem = styled.div`
    background-color: pink;
`
class TodoList2 extends Component {
    render() {
        const { todos } = this.props;
        return (
            <div>
                {
                    todos.map(text => (
                        <div>{text}</div>
                    ))
                }
            </div>
        );
    }
}

const ConnectedTodoList = connect(
    state => {
        return {
            todos: state.todos
            //그렇다면 여기서 store에 있는 todos라는 reducer가 실행이 되어 그 결과의 state('react', 'redux')가 출력이 된다...?
        }
    }
)(TodoList2);



export default class TodoList extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoListItem>z</TodoListItem>
                <ConnectedTodoList />
            </Provider>
        );
    }
}