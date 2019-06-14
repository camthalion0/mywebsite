import React from 'react';        
import ReactDOM from 'react-dom';    
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  //處理Async Action用

export let store = createStore(appReducer, applyMiddleware(thunk));

//console.log(store.getState())

ReactDOM.render(
(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
