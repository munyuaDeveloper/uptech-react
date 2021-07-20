import {
    Link
} from "react-router-dom";

import React, { useState, useEffect } from 'react'

import logo from '../uploads/uptech_logo2.png'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function Header({ activePage }) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const { height, width } = useWindowDimensions();


    return (
        <div>
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse} aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img className="logo" src={logo} alt="image" />

                            </Link>
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

                        {
                            width < 1000 ?

                                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                                    <div id="navbar" className="navbar ">
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
                                : null
                        }
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
