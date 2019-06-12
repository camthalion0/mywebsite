import React, { Component } from 'react';
import './style/style.css';
import './AppLittle.css';
import Hello from './components/Hello';
import Menu from './components/Menu';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import {TransitionGroup,CSSTransition } from 'react-transition-group';
import {withRouter} from 'react-router';

import appReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { connect } from 'react-redux'

let store = createStore(appReducer); 

const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={600}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch location={location}>
        <Route exact path={'/'} component={Hello} />
        {/* <Route exact path={'/about'} component={About} /> */}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

class App extends Component{
  render(){
    return(
      <Provider store = {store}>
        <div className="App">
          <div className='pagebody'>       
            <Routes />
          </div>     
          <div className='pagefoot'>       
            <Menu className="menu"/>           
          </div>
        </div>
      </Provider>
    )
  }
}

export default App;
