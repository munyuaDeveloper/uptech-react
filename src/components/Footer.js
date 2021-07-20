
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import parallax_03 from '../uploads/parallax_03.jpg'
import testi_01 from '../uploads/testi_01.png'
import testi_02 from '../uploads/testi_02.png'
import testi_03 from '../uploads/testi_03.png'
import logo from '../uploads/uptech_logo2.png'
import logo1 from '../uploads/logo_01.png'
import logo2 from '../uploads/logo_02.png'
import logo3 from '../uploads/logo_03.png'
import logo4 from '../uploads/logo_04.png'
import logo5 from '../uploads/logo_05.png'
import logo6 from '../uploads/logo_06.png'


function Footer() {
    return (
        <>
            <div id="testimonials" className="parallax section db parallax-off">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Testimonials</h3>
                        <p className="lead">We thanks for all our awesome testimonials! There are hundreds of our happy
                            customers! <br />Let's see what others say about GoodWEB Solutions website template!</p>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <OwlCarousel className='owl-theme' loop={true} items={1} margin={10} nav>
                                <div className="testimonial clearfix">
                                    <div className="desc">
                                        <h3><i className="fa fa-quote-left"></i> Wonderful Support!</h3>
                                        <p className="lead">They have got my project on time with the competition with a
                                            sed highly skilled, and experienced & professional team.</p>
                                    </div>
                                    <div className="testi-meta">
                                        <img src={testi_01} alt="" className="img-responsive alignleft" />
                                        <h4>James Fernando <small>- Manager of Racer</small></h4>
                                    </div>

                                </div>

                                <div className="testimonial clearfix">
                                    <div className="desc">
                                        <h3><i className="fa fa-quote-left"></i> Awesome Services!</h3>
                                        <p className="lead">Explain to you how all this mistaken idea of denouncing
                                            pleasure and praising pain was born and I will give you completed.</p>
                                    </div>
                                    <div className="testi-meta">
                                        <img src={testi_02} alt="" className="img-responsive alignleft" />
                                        <h4>Jacques Philips <small>- Designer</small></h4>
                                    </div>

                                </div>

                                <div className="testimonial clearfix">
                                    <div className="desc">
                                        <h3><i className="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                        <p className="lead">The master-builder of human happines no one rejects,
                                            dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                    </div>
                                    <div className="testi-meta">
                                        <img src={testi_03} alt="" className="img-responsive alignleft" />
                                        <h4>Venanda Mercy <small>- Newyork City</small></h4>
                                    </div>

                                </div>

                            </OwlCarousel>
                        </div>
                    </div>

                    {/* <div className="row logos">
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo1} alt="" className="img-repsonsive"/></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo2} alt="" className="img-repsonsive"/></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo3} alt="" className="img-repsonsive"/></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo4} alt="" className="img-repsonsive"/></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo5} alt="" className="img-repsonsive"/></a>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                            <a href="#"><img src={logo6} alt="" className="img-repsonsive"/></a>
                        </div>
                    </div> */}

                </div>
            </div>
            <hr className="hr1" />
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="widget clearfix">
                                <div className="widget-title">
                                    <img src={logo} alt="" />
                                </div>
                                <p> We welcome you to join the Uptech Payouts community for interesting offers for our services.</p>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="widget clearfix">
                                <div className="widget-title">
                                    <h3>Pages</h3>
                                </div>

                                <ul className="footer-links hov">
                                    <li>
                                        <Link to="/">Home <span className="icon icon-arrow-right2"></span></Link>
                                    </li>
                                    <li>
                                        <Link to="pricing">Pricing <span className="icon icon-arrow-right2"></span></Link>
                                    </li>
                                    <li>
                                        <Link to="about">About <span className="icon icon-arrow-right2"></span></Link>
                                    </li>
                                    {/* <li><a href="#">Faq <span className="icon icon-arrow-right2"></span></a></li> */}
                                    <li>
                                        <Link to="contact">Contact <span className="icon icon-arrow-right2"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-distributed widget clearfix">
                                <div className="widget-title">
                                    <h3>Subscribe</h3>
                                    <p>Enter your email below to receive news of the latest tech trends.</p>
                                </div>

                                <div className="footer-right">
                                    <form method="get" action="#">
                                        <input placeholder="Subscribe our newsletter.." name="search" />
                                        <i className="fa fa-envelope-o"></i>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyrights">
                    <div className="container">
                        <div className="footer-distributed">
                            <div className="footer-left">
                                <p className="footer-company-name">All Rights Reserved. &copy; 2021 <a href="#">Uptech Payouts</a> Design By :
                                    <a href="https://uptechpay.com/">Uptech payouts</a>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
