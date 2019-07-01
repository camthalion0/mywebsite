import React from 'react';
import './style/style.css';
import Menu from './containers/Menu';
import PageBody from './containers/PageBody';

const App =  () => {
  
  return (
    <div className="App">
      <PageBody />
      <div className='pagefoot'>       
        <Menu className="menu"/>           
      </div>
    </div>
)}

//const mapDispatchToProps = (dispatch) => {}

//export default connect(mapStateToProps)(App);
export default App;