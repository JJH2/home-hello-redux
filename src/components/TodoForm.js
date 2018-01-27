import React, { Component } from 'react';
import styled from 'styled-components';

const TodoInput = styled.input`
    font-size: 1.2em;
    padding: 10px 15px;
`
const TodoButton = styled.button`
    font-size: 1.2em;
    padding: 10px 15px;
    margin-left: 10px;
`

export default class TodoForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('a')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TodoInput type="text" placeholder="할 일을 입력하세요" />
                    <TodoButton type="submit">추가하기</TodoButton>
                </form>
            </div>
        );
    }
}