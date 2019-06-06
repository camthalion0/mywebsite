import React, { Component } from 'react';

class AboutTitle extends Component {
    render() {
        return (          
            <div className='AboutTitle'>
                {this.props.title}
            </div>
        );
    }
}
  
export default AboutTitle;