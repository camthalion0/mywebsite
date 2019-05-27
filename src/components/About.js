import React, { Component } from 'react';
import AboutSection from './AboutSection'

class About extends Component {
    
    render() {
      //  console.log(this.props.match)
      //  console.log(this.props.location);
        let educations = [
            { name: 'edu1', time:'2001~2001', discreption:''},
            { name: 'edu2', time:'2002~2002', discreption:''},
            { name: 'edu3', time:'2003~2003', discreption:''},
        ];

        let experiences = [
            { name: 'exp1', time:'2011~2011', discreption:''},
            { name: 'exp2', time:'2012~2012', discreption:''},
        ];

        return (
            <div className='About' id='About'>
                <AboutSection title='學歷' items={educations}/>
                <AboutSection title='經歷' items={experiences}/>
            </div>
        );
    }
}
  
export default About;