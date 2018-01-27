// reducer

import { addListItem, removeListItem } from '../actions/ListItem';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



function todos(state = ['react', 'redux'], action) {
	switch (action.type) {
		// 리스트를 추가하자
		case 'ADD_LIST_ITEM':
			return [
				...state,
				action.text
			]
		// 리스트를 삭제하자
		case 'REMOVE_LIST_ITEM':
			return [
				...state,
				action.text
			]
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	todos
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
	applyMiddleware(thunk)
))
