import React, { Component } from 'react';
import SkillsTree from '../containers/SkillsTree';
import { switchMenu } from '../actions/index'
import { connect } from 'react-redux'

class Skills extends Component {
    componentDidMount = () => this.props.switchMenu(this.props.location.location.pathname); 

    render = ()=> (
        <div className='Skills' id='Skills'>
            <SkillsTree />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => 
({
    switchMenu: (pathname) => dispatch(switchMenu(pathname)),
})

export default connect(null,mapDispatchToProps)(Skills);
