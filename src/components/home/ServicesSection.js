
import parallax_05 from '../../uploads/parallax_05.png'
import ipad from '../../uploads/ipad.png'
function ServicesSection() {
    return (
        <div>
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

                <hr className="hr1"/>

                <div className="text-center">
                    <a data-scroll href="#portfolio" className="btn btn-light btn-radius btn-brd">View Our Portfolio</a>
                </div>
            </div>
        </div>

        <div className="parallax section noover" data-stellar-background-ratio="0.7" style={{backgroundImage: "url(" + parallax_05 + ")"}}>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <div className="customwidget text-left">
                            <h1>Beautiful Websites</h1>
                            <p>Full access control of the background parallax effects, <br/>change your awesome background elements and edit colors from style.css or colors.css</p>
                            <ul className="list-inline">
                                <li><i className="fa fa-check"></i> Custom Sections</li>
                                <li><i className="fa fa-check"></i> Parallax's</li>
                                <li><i className="fa fa-check"></i> Icons & PSD</li>
                                <li><i className="fa fa-check"></i> Limitless Colors</li>
                            </ul>
                            <a href="#services" data-scroll className="btn btn-light btn-radius btn-brd">Learn More</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center image-center hidden-sm hidden-xs">
                            <img src="uploads/device_03.png" alt="" className="img-responsive wow fadeInUp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div id="features" className="section lb">
            <div className="container">
                <div className="section-title text-center">
                    <h3>Features & Overviews</h3>
                    <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br/>lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                </div>

                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="features-left">
                            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                                <i className="flaticon-wordpress-logo"></i>
                                <div className="fl-inner">
                                    <h4>WordPress Installation</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <i className="flaticon-windows"></i>
                                <div className="fl-inner">
                                    <h4>Browser Compatible</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
                                <i className="flaticon-price-tag"></i>
                                <div className="fl-inner">
                                    <h4>eCommerce Ready</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                <i className="flaticon-new-file"></i>
                                <div className="fl-inner">
                                    <h4>Easy to Customize</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 hidden-xs hidden-sm">
                        <img src={ipad} className="img-center img-responsive" alt="" />
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="features-right">
                            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                                <i className="flaticon-pantone"></i>
                                <div className="fr-inner">
                                    <h4>Limitless Colors</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                <i className="flaticon-cloud-computing"></i>
                                <div className="fr-inner">
                                    <h4>Lifetime Update</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.4s">
                                <i className="flaticon-line-graph"></i>
                                <div className="fr-inner">
                                    <h4>SEO Friendly</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <i className="flaticon-coding"></i>
                                <div className="fr-inner">
                                    <h4>Simple Clean Code</h4>
                                    <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ServicesSection
