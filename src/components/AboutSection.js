import React, { Component } from 'react';
import AboutTitle from './AboutTitle'
import AboutItemList from './AboutItemList'

class AboutSection extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className='AboutSection'>
                <AboutTitle title={this.props.title}/>
                <AboutItemList title={this.props.title} items={this.props.items} />
            </div>
        );
    }
}
  
export default AboutSection;