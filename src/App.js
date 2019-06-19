import React from 'react';
import './style/style.css';
import Hello from './components/Hello';
import Menu from './components/Menu';
import About from './containers/About';
import { Route, Switch } from 'react-router-dom';
import {TransitionGroup,CSSTransition } from 'react-transition-group';
import {withRouter} from 'react-router';

const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={600}
      classNames={'fade'}
      key={location.pathname}
    >
      <Switch location={location}>
        <Route exact path={'/'} render={()=><Hello />} />
        <Route exact path={'/about'} render={()=><About />} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

const App =  () => (
        <div className="App">
          <div className='pagebody'>       
            <Routes />
          </div>     
          <div className='pagefoot'>       
            <Menu className="menu"/>           
          </div>
        </div>
    )
  


export default App;
