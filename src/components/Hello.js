import React, { Component } from 'react';
import DateText from '../containers/DateText';
import { switchMenu } from '../actions/index'
import { connect } from 'react-redux'

class Hello extends Component {
    componentDidMount = () => this.props.switchMenu(this.props.location.location.pathname); 

    render = () => (
        <div className='Hello' id='Hello'>
            <DateText/>
        </div>
    )
    }

const mapDispatchToProps = (dispatch) => 
({
    switchMenu: (pathname) => dispatch(switchMenu(pathname)),
})

export default connect(null,mapDispatchToProps)(Hello);

