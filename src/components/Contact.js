import React from 'react';
import { toggleContact } from '../actions/index'
import { connect } from 'react-redux'

const Contact = (props) =>{
 
    let className = "Contact" + (props.showContact?" ContactOn":" ContactOff");
    //  console.log(this.props.showContact);
    return (      
            <div className={className}>
                <div className='close'
                onClick={()=>props.toggleContact(false)}>×</div>
                1234564
            </div>
            )
}   

const mapDispatchToProps = (dispatch) => 
({
    toggleContact: (ifShow) => dispatch(toggleContact(ifShow)),
})

export default connect(null,mapDispatchToProps)(Contact);