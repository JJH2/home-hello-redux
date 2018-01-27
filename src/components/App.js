import React, { Component } from 'react';
import Header from './Header';
import Todo from './Todo';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todo />
            </div>
        );
    }
}