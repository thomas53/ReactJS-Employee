import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import RootReducer from '../reducers';

const initState = {};
const middleware = [thunk];

const store = createStore(
	RootReducer,
	initState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
