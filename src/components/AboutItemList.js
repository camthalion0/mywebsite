import React, { Component } from 'react';
import AboutItemDescription from './AboutItemDescription';
import { toggleDescription,updateTime } from '../actions/index'
import { connect } from 'react-redux'

class AboutItemList extends Component {

    render() {

        let showDescription =  this.props.showDescription;
        console.log(showDescription)

        return (
            <div className='AboutItem'>
                {
                    this.props.items.map((item,index)=>{

                        let ifShow = showDescription[this.props.title][index];    
                     //   console.log(ifShow)
                        return (
                       
                            <li key={index} 
                                onClick = {()=>this.props.toggleDescription(index,this.props.title,!ifShow)}
                                className={ifShow? "AboutItemOn":"AboutItemOff"}
                            >
                                {item.name}
                                <AboutItemDescription description={item.description}/>
                            </li>                                       
                        )
                    })
                }
            </div>
        );
    }
}

//將store state tree 的值轉為this.props
const mapStateToProps = state => {
    return {
        showDescription: state.showDescription,
    }
}
  
const mapDispatchToProps = (dispatch) => 
     ({
        toggleDescription: (index,title,newState) => dispatch(toggleDescription(index,title,newState)),
      })

export default connect(mapStateToProps, mapDispatchToProps)(AboutItemList);
