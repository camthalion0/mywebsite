import React, { Component } from 'react';

class MenuItem extends Component{

    render(){
        return(
            <a className='MenuItem' src={this.props.link}>{this.props.title}</a>
        )
    }

}

export default MenuItem;