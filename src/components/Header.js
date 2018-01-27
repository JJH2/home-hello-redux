import React, { Component } from 'react';
import styled from 'styled-components';

const MyHeader = styled.header`
    padding: 10px;
    text-align: center;
    background-color: skyblue;
`
const Title = styled.h1`
    font-size: 2em;
    font-weight: bold;
`

export default class Header extends Component {
    render() {
        return (
            <MyHeader>
                <Title>todolist</Title>
            </MyHeader>
        );
    }
}