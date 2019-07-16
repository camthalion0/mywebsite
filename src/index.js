import React from 'react';        
import ReactDOM from 'react-dom';    
import './index.css';
import App from './App';
//import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appReducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';  //處理Async Action用

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

//console.log(store.getState())

ReactDOM.render(
(
    <Provider store = {store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));
