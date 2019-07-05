import mail from '../img/mail.png'
import { connect } from 'react-redux'
import React from 'react';
import Routes from '../components/Routes';
import Contact from '../components/Contact';
import {withRouter} from 'react-router';
import { toggleContact } from '../actions/index'

const PageBody = (props) => {

    return(
        <div className='pagebody' id='pagebody'>       
            <Routes />
            <img alt="My Contact" className='mailCat' src={mail} 
                onClick={()=>props.toggleContact(true)}></img>
            <Contact showContact={props.showContact} />
        </div>    
    )
}

const mapStateToProps = state => 
({
    showContact:state.showContact
})

const mapDispatchToProps = (dispatch) => 
({
    toggleContact: (ifShow) => dispatch(toggleContact(ifShow)),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PageBody));


