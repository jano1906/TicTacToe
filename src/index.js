import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';

import createReducer from './reducer';
import { Game } from './containers/game';

const DEBUG = true;

const reducer = createReducer();

let composeEnhancers, store;

if (DEBUG) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = createStore(reducer, undefined, composeEnhancers());
} else {
    composeEnhancers = compose;
    store = createStore(reducer, undefined, composeEnhancers());
}

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
