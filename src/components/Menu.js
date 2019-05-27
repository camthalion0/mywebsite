import React, { Component } from 'react';
//import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
//import MenuItem from './MenuItem'

class Menu extends Component{

    render(){
        return(
            <nav className="Menu">
                <Link to="/">Hello</Link>
                <Link to="/about">About</Link>
            </nav>
        )
    }

}

export default Menu;