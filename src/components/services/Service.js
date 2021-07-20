import React from 'react'
import './service.css'
import Breadcrumb from '../Breadcrumb'
import Header from "../Header";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import service_01 from '../../uploads/payment-gateway.jpg'
import service_02 from '../../uploads/service_02.jpg'
import service_03 from '../../uploads/service_03.jpg'
import service_04 from '../../uploads/service_04.jpg'
import { useMediaQuery } from 'react-responsive';

function Service() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
                                    <span className="icon icon-display" />
                                </div>
                                <div className="about-text">
                                    <h3>Web Application </h3>
                                    <p>We create eye-catching, responsive and optimized web applications at affordable prices. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-database" />
                                </div>
                                <div className="about-text">
                                    <h3> Mobile Application</h3>
                                    <p>We create mobile application that fits your business requirements at affordable prices. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-magic-wand" />
                                </div>
                                <div className="about-text">
                                    <h3> Payment Integration</h3>
                                    <p>We integrate your system with online payment gateways like Mpesa & PayPal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="about-item">
                                <div className="about-icon">
                                    <span className="icon icon-cloud" />
                                </div>
                                <div className="about-text">
                                    <h3> Point of Sale Systems</h3>
                                    <p>We create POS for small and complex stores at affordable prices.</p>
                                    <br></br>
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
                    <OwlCarousel className='owl-theme' loop={true} items={isMobile ? 1 : 3} margin={10} nav>
                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                                <img src={service_01} alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Payment Gateway Integration</h3>
                                <p>We help small business integrate their existing systems with payment gate ways like Mpesa, PayPal and Credit Cards.</p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                                <img src={service_02} alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Web Application</h3>
                                <p>We create landing pages for cooporate businesses to help them sell their services online. We also create online shops for small and established business. </p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                                <img src={service_03} alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Mobile Application</h3>
                                <p>We create both Android and IOS mobile applications for online shops and cooporate businesses.</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>


        </>
    )
}

export default Service