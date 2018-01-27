import React, { Component } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoWrap = styled.div`
    width: 100%;
    padding: 30px;
    text-align: center;
    margin: auto;
`

export default class Todo extends Component {
    render() {
        return(
            <TodoWrap>
                <TodoForm />
                <TodoList />
            </TodoWrap>
        );
    }
}