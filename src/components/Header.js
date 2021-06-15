import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header() {
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
                                <img src="images/logos/logo.png" alt="image" />

                                </a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link className="active" to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About us</Link>
                                </li>

                                <li>
                                    <Link to='/service'>Our Service</Link>
                                </li>

                                <li>
                                    <Link to='/pricing'>Our Pricing</Link>
                                </li>

                                <li>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
