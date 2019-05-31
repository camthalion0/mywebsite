import React, { Component } from 'react';
import AboutItemDescription from './AboutItemDescription';

class AboutItemList extends Component {

    constructor(){
        super();
        this.state = {
            showDescription: [true,true,true]
        };
    }

    /* 變更Description顯示 */
    toggleDescription(index) {  
        // let nowstate =  !this.state.showDescription[index];
        // let showDescription = this.state.showDescription.map(x=>false);    //隱藏全部
        // showDescription[index] = nowstate;
        
        let showDescription = this.state.showDescription;
        showDescription[index] = !this.state.showDescription[index];

        this.setState({showDescription});

    }
    
    render() {
        return (
            <div className='AboutItem'>
                {
                    this.props.items.map((item,index)=>{
                        return (                           
                            <li key={index} 
                                onClick={(e)=>this.toggleDescription(index,e)}
                            >
                                {item.name}
                                <AboutItemDescription showDescription={this.state.showDescription[index]}
                                                      description={item.description}/>
                            </li>                                       
                        )
                    })
                }
            </div>
        );
    }
}
  
export default AboutItemList;