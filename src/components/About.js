import React, { Component } from 'react';
import AboutSection from './AboutSection'
import data from './../data'

class About extends Component {
    
    render() {
        let {educations, experiences} =  data;

        return (
            <div className='About' id='About'>
                <AboutSection title='education' items={educations}/>
                <AboutSection title='experience' items={experiences}/>
            </div>
        );
    }
}
  
export default About;