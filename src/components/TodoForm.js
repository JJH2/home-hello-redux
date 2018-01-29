import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Todo from '../actions/index';

export default class TodoForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.elements.input.value;
        console.log(inputValue);
        this.props.addListItem(inputValue);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="input" />
                    <button type="submit">추가하기</button>
                </form>
            </div>
        );
    }
}

