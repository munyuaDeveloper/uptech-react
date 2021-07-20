import React from 'react'
import AboutSection from './AboutSection'
import ProjectAndClients from './ProjectAndClients'
import NavbarSlider from "../NavbarSlider";
import OwlCarousel from "react-owl-carousel";
import service_01 from "../../uploads/payment-gateway.jpg";
import service_02 from "../../uploads/service_02.jpg";
import service_03 from "../../uploads/service_03.jpg";
import { useMediaQuery } from "react-responsive";

function Home() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <div>
            <NavbarSlider activePage="Home" />

            <AboutSection />

            <ProjectAndClients />

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
                                <h3>Web Applications</h3>
                                <p>We create landing pages for corporate businesses to help them sell their services online. We also create online shops for small and established business. </p>
                            </div>
                        </div>

                        <div className="service-widget">
                            <div className="post-media wow fadeIn">
                                <a href="uploads/service_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
                                <img src={service_03} alt="" className="img-responsive img-rounded" />
                            </div>
                            <div className="service-dit">
                                <h3>Mobile Applications</h3>
                                <p>We create both Android and IOS mobile applications for online shops and cooporate businesses.</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>


        </div>
    )
}

export default Home
