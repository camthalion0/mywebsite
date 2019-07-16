import React from 'react';
import { toggleContact } from '../actions/index'
import { connect } from 'react-redux'
import emailpng from '../img/email.png'
import linkedinpng from '../img/linkedin.png'
import github from '../img/github.png'

const Contact = (props) =>{
 
    let className = "Contact" + (props.showContact?" ContactOn":" ContactOff");
    //  console.log(this.props.showContact);
    return (      
            <div className={className}>
                <div className='close'
                // onClick={()=>props.toggleContact(false)}>×</div>
                onClick={()=>props.toggleContact(false)}>close</div>
                <div className='content'>
                    <div className='name'>LALA CHUNG</div>
                    <div className='job'>front-end developer</div>
                    <div className='socialMedia'>
                        <a target='_blank' href='mailto:camthalion1234@gmail.com' rel="noopener noreferrer">
                            <img alt='Email' src={emailpng}></img>
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/huei-hsin-chung-489739155/' rel="noopener noreferrer">
                            <img alt='Linkedin' src={linkedinpng} ></img>
                        </a>
                        <a target='_blank' href='https://github.com/camthalion0?tab=repositories' rel="noopener noreferrer">
                            <img alt='GitHub' src={github}></img>
                        </a>                       
                    </div>
                    {/* <div>Email: camthalion1234@gmail.com</div>
                    <div>Linkedin: https://www.linkedin.com/in/huei-hsin-chung-489739155/</div>
                    <div>GitHub: https://github.com/camthalion0?tab=repositories</div>
                    <div>WebSite: https://camthalion0.github.io/websiteHost/#/</div> */}
                </div>
            </div>
            )
}   

const mapDispatchToProps = (dispatch) => 
({
    toggleContact: (ifShow) => dispatch(toggleContact(ifShow)),
})

export default connect(null,mapDispatchToProps)(Contact);