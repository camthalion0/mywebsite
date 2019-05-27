import React, { Component } from 'react';

class AboutItemList extends Component {
    render() {
        return (
            <div className='AboutItem'>
                {
                    this.props.items.map((item,index)=>{
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    })
                }
            </div>
        );
    }
}
  
export default AboutItemList;