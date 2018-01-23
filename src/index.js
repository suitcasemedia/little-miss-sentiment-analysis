import React from 'react';
import ReactDOM from 'react-dom';
import MoodApp from './components/mood-app';
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  ReduxPromise from 'redux-promise'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MoodApp />
    </Provider>

    , document.getElementById('root')
);
registerServiceWorker();
