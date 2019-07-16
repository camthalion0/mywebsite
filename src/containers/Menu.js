import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const getLastPath = (str) => {
    let strArray
    if (str !== '') {
        strArray = str.split('/')
    }
    return strArray[strArray.length -1]
}

 const Menu = (props) => {

    let pathname = getLastPath(props.pathname)
    return (
        <nav className="Menu">
            <div className={(pathname===""||pathname==='Home')? "MenuLink_on":"MenuLink_off"}>
                <Link to={`/`} >Home</Link>
            </div>
            <div className={pathname==="About"? "MenuLink_on":"MenuLink_off"}>
                <Link to={`/About`} >About</Link>
            </div>  
            <div className={pathname==="Skills"? "MenuLink_on":"MenuLink_off"}>
                <Link to={`/Skills`} >Skills</Link>
            </div>    
        </nav>
    )
 }

//將store state tree 的值轉為this.props
const mapStateToProps = state => 
    ({
        pathname: state.pathname,
    })

export default connect(mapStateToProps)(Menu);