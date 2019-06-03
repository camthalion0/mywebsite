import React, { Component } from 'react';
import AboutItemDescription from './AboutItemDescription';

class AboutItemList extends Component {

    constructor(){
        super();
        this.state = {
            showDescription: [false,false,false]
        };
    }

    /* 變更Description顯示 */
    toggleDescription(index) {  
        let nowstate =  !this.state.showDescription[index];
        let showDescription = this.state.showDescription.map(x=>false);    //隱藏全部
        showDescription[index] = nowstate;
        this.setState({showDescription});
    }
    
    render() {
        return (
            <div className='AboutItem'>
                {
                    this.props.items.map((item,index)=>{

                        let itemClassName =  this.state.showDescription[index]? "AboutItemOn":"AboutItemOff";
                        return (                           
                            <li key={index} className={itemClassName}
                                onClick={(e)=>this.toggleDescription(index,e)}
                            >
                                {item.name}
                                <AboutItemDescription 
                                // showDescription={this.state.showDescription[index]}
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