import React, { Component } from 'react';
import AboutSection from '../components/AboutSection'
import { connect } from 'react-redux'
import { getAboutData } from '../actions/index'

class About extends Component {
    
    componentDidMount() {       //當元件被寫入 DOM 之後觸發
        this.props.dispatch(getAboutData());  //取得自介資料        
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
  
export default connect(mapStateToProps)(About);