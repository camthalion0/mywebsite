import React, { Component } from 'react';

class AboutItemDescription extends Component{

    render(){
        let showDescription = this.props.showDescription?"AboutItemDescriptionOn":"AboutItemDescriptionOff";
     //   let showDescriptionTxt = 
        let description = this.props.description;

        return (
            // <div hidden={!showDescription} className='AboutItemDescription'>
            <div className='AboutItemDescription' >
                <span 
                    // hidden={!this.props.showDescription}
                >
                    {description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                    {description}{description}
                </span>               
            </div>
        )    
    }
}

export default AboutItemDescription;