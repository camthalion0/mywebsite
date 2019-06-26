import React from 'react';
//import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
//import MenuItem from './MenuItem'

const Menu = ()=>
        (
            <nav className="Menu">
            <div className="MenuLink_on"><Link to="/">Hello</Link></div>
            <div className="MenuLink_off"><Link to="/about">About</Link></div>  
            <div className="MenuLink_off"><Link to="/skills">Skills</Link></div>    
            </nav>
        )


export default Menu;