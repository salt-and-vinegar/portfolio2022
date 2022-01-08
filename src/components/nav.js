import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Nav extends Component {
    render(){
        return(
            <nav className="overlay-menu">
                <ul>
                    <li><Link to="/">Nayoung Kim</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/works">Works</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;