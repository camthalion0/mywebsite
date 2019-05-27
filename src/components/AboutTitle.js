import React, { Component } from 'react';

class AboutTitle extends Component {
    render() {
        return (          
            <div className='AboutTitle'>
                <h4>{this.props.title}</h4>
            </div>
        );
    }
}
  
export default AboutTitle;