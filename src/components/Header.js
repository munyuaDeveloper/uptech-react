import {
    Link
  } from "react-router-dom";

import logo  from '../uploads/uptech_logo2.png'

function Header( {activePage}) {
    return (
        <div>
            <header className="header header_style_01">
            <nav className="megamenu navbar navbar-default">
                    <div className="container-fluid">
                    <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img className="logo" src={logo} alt="image" />

                                </a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link className={(activePage === 'Home' ? 'active' : '')} to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className={(activePage === 'About' ? 'active' : '')} to='/about'>About us</Link>
                                </li>

                                <li>
                                    <Link className={(activePage === 'Service' ? 'active' : '')} to='/service'>Our Service</Link>
                                </li>

                                <li>
                                    <Link className={(activePage === 'Pricing' ? 'active' : '')} to='/pricing'>Our Pricing</Link>
                                </li>

                                <li>
                                    <Link className={(activePage === 'Contact' ? 'active' : '')} to='/contact'>Contact Us</Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
Header.defaultProps = {
    activePage: "Home",
};

export default Header
