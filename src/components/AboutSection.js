import React from 'react';
import AboutTitle from './AboutTitle'
import AboutItemList from '../containers/AboutItemList'

const AboutSection = (props) => (
            <div className='AboutSection'>
                <AboutTitle title={props.title.toUpperCase()}/>
                <AboutItemList title={props.title} items={props.items} />
            </div>
        );
  
export default AboutSection;