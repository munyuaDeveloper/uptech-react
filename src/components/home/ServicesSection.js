
import parallax_05 from '../../uploads/parallax_05.png'
import small from '../../uploads/small.png'
import web from '../../uploads/device_03.png'
import feature_01 from '../../uploads/features_01.jpg'
import feature_02 from '../../uploads/features_02.jpg'
import feature_03 from '../../uploads/features_03.jpg'
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
                                <p>Praesent in neque congue sapien lobortis faucibus id eget erat. <br />Pellentesque maximus rutrum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            </div>
                        </div>
                    </div>

                    <hr className="hr1" />

                    <div className="text-center">
                        <a data-scroll href="#portfolio" className="btn btn-light btn-radius btn-brd">View Our Portfolio</a>
                    </div>
                </div>
            </div>

            <div className="parallax section noover" data-stellar-background-ratio="0.7" style={{ backgroundImage: "url(" + parallax_05 + ")" }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <div className="customwidget text-left">
                                <h1>Beautiful Websites</h1>
                                <p>Full access control of the background parallax effects, <br />change your awesome background elements and edit colors from style.css or colors.css</p>
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
                                <img src={web} alt="" className="img-responsive wow fadeInUp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="features" class="section wb">
                <div class="container">
                    <div class="section-title text-center">
                        <h3>Features & Overviews</h3>
                        <p class="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br />lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <ul class="features-left">
                                <li class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <i class="flaticon-wordpress-logo"></i>
                                    <div class="fl-inner">
                                        <h4>WordPress Installation</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <i class="flaticon-windows"></i>
                                    <div class="fl-inner">
                                        <h4>Browser Compatible</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <i class="flaticon-price-tag"></i>
                                    <div class="fl-inner">
                                        <h4>eCommerce Ready</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <i class="flaticon-new-file"></i>
                                    <div class="fl-inner">
                                        <h4>Easy to Customize</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 hidden-md hidden-xs hidden-sm">
                            <div class="mobile">
                                <div class="phone">
                                    <div class="phone-mirror">
                                        <div class="topWrapper">
                                            <div class="camera"></div>
                                            <div class="line-rec"></div>
                                        </div>
                                        <img src={small} alt="oppo" height="535" width="312" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <ul class="features-right">
                                <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <i class="flaticon-pantone"></i>
                                    <div class="fr-inner">
                                        <h4>Limitless Colors</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                                    <i class="flaticon-cloud-computing"></i>
                                    <div class="fr-inner">
                                        <h4>Lifetime Update</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <i class="flaticon-line-graph"></i>
                                    <div class="fr-inner">
                                        <h4>SEO Friendly</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                                <li class="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                    <i class="flaticon-coding"></i>
                                    <div class="fr-inner">
                                        <h4>Simple Clean Code</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr class="hr1" />

                    <div class="row text-center">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="service-widget">
                                <div class="post-media wow fadeIn">
                                    <a href={feature_01} data-rel="prettyPhoto[gal]" class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src={feature_01} alt="" class="img-responsive img-rounded" />
                                </div>
                                <h3>Outstanding Landing Pages</h3>
                                <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="service-widget">
                                <div class="post-media wow fadeIn">
                                    <a href={feature_02} data-rel="prettyPhoto[gal]" class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src={feature_02} alt="" class="img-responsive img-rounded" />
                                </div>
                                <h3>Beautiful SVG Font Icons</h3>
                                <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
                            </div>
                        </div>

                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="service-widget">
                                <div class="post-media wow fadeIn">
                                    <a href={feature_03} data-rel="prettyPhoto[gal]" class="hoverbutton global-radius"><i class="flaticon-unlink"></i></a>
                                    <img src={feature_03} alt="" class="img-responsive img-rounded" />
                                </div>
                                <h3>Build a Site In Few Minutes</h3>
                                <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ServicesSection
