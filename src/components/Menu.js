import React from 'react';
//import { Router, Route } from 'react-router'
import { Link } from 'react-router-dom'
//import MenuItem from './MenuItem'

const Menu = ()=>
        (
            <nav className="Menu">
                <Link to="/">Hello</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
            </nav>
        )


export default Menu;