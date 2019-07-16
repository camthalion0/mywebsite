import {withRouter} from 'react-router';
import Hello from '../containers/Hello';
import About from '../containers/About';
import Skills from '../containers/Skills';
import React from 'react';
import {TransitionGroup,CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';

const Routes = withRouter(({location}) => (
// const Routes = (location) => (
    <TransitionGroup className={'router-wrapper'}>
      <CSSTransition
        timeout={400}
        classNames={'fade'}
        key={location.pathname}
      >
        <Switch location={location}>
          <Route exact path={`/`} render={(location)=><Hello location={location}/>} />
          <Route exact path={`/Home`} render={(location)=><Hello location={location}/>} />
          <Route exact path={`/About`} render={(location)=><About location={location}/>} />
          <Route exact path={`/Skills`} render={(location)=><Skills location={location}/>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  export default Routes;