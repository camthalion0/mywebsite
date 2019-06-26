import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import { switchMenu } from '../actions/index'
import { connect } from 'react-redux'

class Menu extends Component{

    constructor(){
        super();
        this.state={
            menuIndex:0
        }
    }

    render(){
        let menuIndex = this.props.menuIndex;
        return (
            <nav className="Menu">
                <div className={menuIndex===0? "MenuLink_on":"MenuLink_off"}>
                    <Link to="/" onClick = {()=>this.props.switchMenu(0)}>Home</Link>
                </div>
                <div className={menuIndex===1? "MenuLink_on":"MenuLink_off"}>
                    <Link to="/about" onClick = {()=>this.props.switchMenu(1)}>About</Link>
                </div>  
                <div className={menuIndex===2? "MenuLink_on":"MenuLink_off"}>
                    <Link to="/skills" onClick = {()=>this.props.switchMenu(2)}>Skills</Link>
                </div>    
            </nav>
        )
    }
 }

//將store state tree 的值轉為this.props
const mapStateToProps = state => 
    ({
        menuIndex: state.menuIndex,
    })

const mapDispatchToProps = (dispatch) => 
    ({
        switchMenu: (index) => dispatch(switchMenu(index)),
    })

export default connect(mapStateToProps, mapDispatchToProps)(Menu);