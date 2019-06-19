import React from 'react';
import AboutTitle from './AboutTitle'
import AboutItemList from '../containers/AboutItemList'

const AboutSection = () => (
            <div className='AboutSection'>
                <AboutTitle title={this.props.title}/>
                <AboutItemList title={this.props.title} items={this.props.items} />
            </div>
        );
  
export default AboutSection;