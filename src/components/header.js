import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import Nav from "./nav"
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { showing : false};
      }

    render(){
        const logoUrl = "logo_image.png";
        const menuUrl = "menu.png";
        const thisYear = new Date();
        const yearDate = thisYear.getFullYear();
        const portUrl = "portfolio.png";
        const { showing } = this.state;
        return(
            <div>
                <h1 id="indexLogo">
                    <Link to="/">
                        {/* <img src={logoUrl} alt="logo"/> */}
                        Nayoung Kim
                    </Link>
                </h1>
                <div id="menu" onClick={() => this.setState({ showing: !showing })}>
                    {/* <img src={menuUrl} alt="openMenu"/> */}
                    Menu
                    <div className={(showing ? 'menu-container full-menu' : 'menu-container')}></div>
                </div>
                <div id="navigation" className={(showing ? 'overlay open' : 'overlay')} style={{ display: (showing ? 'block' : 'none') }}>
                    <div id="menuClose"  onClick={() => this.setState({ showing: !showing })}>Close</div>
                    <Nav></Nav>
                </div>
                <div id="year">{ yearDate }</div>
                <div id="portfolio">{this.props.title}</div>
            </div>
        )
    }
}

export default Header;