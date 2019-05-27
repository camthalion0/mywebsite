import React, { Component } from 'react';
import DateCanvas from './DateCanvas';

class TitleWithCanvas extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          height: 0,
          with:0
        }
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;     
        const width = this.divElement.clientWidth;
        this.setState({ height ,width});    
    }


    render() {
        return (
            <div className='App-title' id='App-title'
                 ref={ (divElement) => this.divElement = divElement}>
                <DateCanvas width={this.state.width}
                          height={this.state.height}/>
            </div>
        );
    }
}
  
export default TitleWithCanvas;



