
import Breadcrumb from '../Breadcrumb'
import Header from "../Header";
import React from "react";
import './pricing.css'

function pricing() {
    return (
        <>
            <Header activePage="Pricing" />
            <Breadcrumb currentPage='Our Prices' />

            <div id="about" className="section wb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Payment gateway Integration</h3>
                        <p className="lead">We help you go cashless!!!! <br />Here are our charges for various cashless solutions.!</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable pricingTable_mpesa">
                                <div className="pricingTable-header">
                                    <h3 className="title">Business Mpesa Integration</h3>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <span className="currency"></span>
                                        <span className="amount">Free</span>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>No need of shortcode</li>
                                    <li>Payments made through Uptech Payouts</li>
                                    <li> In-app mobile payments.</li>
                                    <li>Mobile browser-based payments</li>
                                    <li>Free maintenance</li>
                                </ul>
                                <a href="#" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable pricingTable_mpesa purple">
                                <div className="pricingTable-header">
                                    <h3 className="title">Mpesa Integration</h3>
                                    <span className="sub-title">Small Installation Fee</span>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>30k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>Need till/paybill no</li>
                                    <li>Payments to your own account</li>
                                    <li> In-app mobile payments</li>
                                    <li>Mobile browser-based payments</li>
                                    <li>Free maintenance</li>
                                </ul>
                                <a href="{{url('/payments/mpesa')}}" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable pricingTable_mpesa blue">
                                <div className="pricingTable-header">
                                    <h3 className="title">Paypal, Visa card, Mastercard</h3>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>20k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>Website integration</li>
                                    <li>Customized payments</li>
                                    <li>Free maintenance</li>

                                </ul>
                                <a href="{{ url('/others')}}" className="pricingTable-signup">Read more... </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="section wb">
                <div className="container mb-5">
                    <div className="section-title text-center">
                        <h3>Web Design and Development</h3>
                        <p className="lead">We help you create a better impression of your business by thriving online! <br /> Here are
                            the solutions we provide for you at uptech!</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable pricingTable_web">
                                <div className="pricingTable-header">
                                    <h3 className="title">Starter park</h3>
                                    <span className="sub-title">Personal/Blog website</span>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>25k - 35k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>5-10 pages</li>
                                    <li>Free domain for 1 yr</li>
                                    <li>Free hosting for 1 yr</li>
                                    <li className="disable">Free maintainance</li>
                                    <li className="disable">Database driven</li>
                                    <li className="disable">Payment integration (including M-pesa)</li>
                                </ul>
                                <a href="{{ url('/contact-us')}}" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable pricingTable_web purple">
                                <div className="pricingTable-header">
                                    <h3 className="title">Corporate</h3>
                                    <span className="sub-title">Business website</span>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>40k - 60k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>25-50 pages</li>
                                    <li>Free domain for 1 yr</li>
                                    <li>Free hosting for 1 yr</li>
                                    <li>3 months Free maintainance</li>
                                    <li>Database driven</li>
                                    <li className="disable">Payment integration (including M-pesa)</li>
                                </ul>
                                <a href="{{ url('/contact-us')}}" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable  pricingTable_web blue">
                                <div className="pricingTable-header">
                                    <h3 className="title">eCommerce</h3>
                                    <span className="sub-title">Online shop</span>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>70k -</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>100 + pages</li>
                                    <li>Free domain for 1 yr</li>
                                    <li>Free hosting for 1 yr</li>
                                    <li>6 months Free maintainance</li>
                                    <li>Database driven</li>
                                    <li>Payment integration (including M-pesa)</li>
                                </ul>
                                <a href="{{ url('/contact-us')}}" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="section wb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Mobile Application Development</h3>
                        <p className="lead">We build awesome mobile applications for your business! <br />Here are our offers!</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable">
                                <div className="pricingTable-header">
                                    <h3 className="title">Android Application</h3>
                                    <span className="sub-title"></span>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>40k - 80k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>Built on an android platform</li>
                                    <li>Platform specific features</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>Support for 4 months</li>
                                </ul>
                                <a href="#" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable purple">
                                <div className="pricingTable-header">
                                    <h3 className="title">IOS Mobile application</h3>
                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>70k - 120k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>Developed for IOS</li>
                                    <li>Built using Swift</li>
                                    <li>Platform specific features</li>
                                    <li>Support for 4 months</li>

                                </ul>
                                <a href="#" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="pricingTable blue">
                                <div className="pricingTable-header">
                                    <h3 className="title">Hybrid Mobile Applications</h3>

                                </div>
                                <div className="price-value">
                                    <div className="value">
                                        <p className="currency">Kshs <br /> <b>30k - 50k</b></p>
                                    </div>
                                </div>
                                <ul className="pricing-content">
                                    <li>One app for android and ios</li>
                                    <li>Developed using IONIC</li>
                                    <li>Support for 4 months</li>
                                    <li className="disable">Limited features on some platforms</li>
                                </ul>
                                <a href="#" className="pricingTable-signup">Select the plan </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pricing
