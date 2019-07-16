import React, { Component } from 'react';
import AboutSection from '../components/AboutSection'
import { connect } from 'react-redux'
import { getAboutData } from '../actions/index'
import { switchMenu } from '../actions/index'

class About extends Component {
    
    componentDidMount() {       //當元件被寫入 DOM 之後觸發
        this.props.getAboutData();  //取得自介資料   
        this.props.switchMenu(this.props.location.location.pathname);      
    }

    render() {
        let {educations, experiences} =  this.props.aboutMe;

        return (
            <div className='About' id='About'>
                <AboutSection title='education' items={educations}/>
                <AboutSection title='experience' items={experiences}/>
            </div>
        );
    }
}

//將store state tree 的值轉為this.props
const mapStateToProps = state => {
    return {
        aboutMe: state.aboutMe,
    }
}

const mapDispatchToProps = (dispatch) => 
({
    getAboutData:()=> dispatch(getAboutData()),
    switchMenu: (pathname) => dispatch(switchMenu(pathname)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(About);