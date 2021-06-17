import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Header from "../Header";

function Service() {
    return (
        <>
            <Header activePage="Service" />
             <Breadcrumb currentPage='Our Service' />

             <div id="about" className="section wb">
                <div className="container">
                <div className="row text-center">
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-display"></span>
                                </div>
                                <div className="about-text">
                                    <h3> <a href="#">Lorem ipsum dolor. </a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-database"></span>
                                </div>
                                <div className="about-text">
                                    <h3> <a href="#">Lorem ipsum dolor. </a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-magic-wand"></span>
                                </div>
                                <div className="about-text">
                                    <h3> <a href="#">Lorem ipsum dolor. </a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-cloud"></span>
                                </div>
                                <div className="about-text">
                                    <h3> <a href="#">Lorem ipsum dolor. </a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="parallax section lb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Our Service</h3>
                        <p className="lead">Our Service unlimited solutions to all your business needs. in the installation package we prepare search engine optimization, social media support, we provide corporate identity and graphic design services.</p>
                    </div>

                    <div className="owl-services owl-carousel owl-theme">
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src="uploads/service_01.jpg" alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Smart Swatch Editions</h3>
                                <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src="uploads/service_02.jpg" alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Web UI Kit Design</h3>
                                <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src="uploads/service_03.jpg" alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Mobile Optimization</h3>
                                <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_04.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                <img src="uploads/service_04.jpg" alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Digital Design for Mac</h3>
                                <p>Praesent in neque congue sapien lobortis faucibus id eget erat. <br/>Pellentesque maximus rutrum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                        </div>

                    </div>

                    <hr className="hr1" />

                    <div className="text-center">
                        <a data-scroll href="#portfolio" className="btn btn-light btn-radius btn-brd">View Our Portfolio</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
