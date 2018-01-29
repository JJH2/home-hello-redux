import React, { Component } from 'react';
import Header from './Header';
import Todo from './Todo';
import { Provider } from 'react-redux';
import { store } from '../reducers/index';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Todo />
                </div>
            </Provider>
        );
    }
}