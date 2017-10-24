import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import MainContainer from './containers/MainContainer';
import user from './redux/user';


const initialState = {
  token: localStorage.getItem('token')
};

const store = createStore(user, initialState, applyMiddleware(thunk));

ReactDom.render(
	<Provider store={store}>
		<MainContainer />
	</Provider>,
document.getElementById('app'));
