import React from 'react'
import Breadcrumb from '../Breadcrumb'
import Header from "../Header";

function contact() {
    return (
        <>
            <Header activePage="Contact" />
            <Breadcrumb currentPage='Contact Us' />
            <div id="contact" className="section wb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Get in touch</h3>
                        <p className="lead">Let us give you more details about the special offer we have just for you. Please fill out the form below. <br /></p>
                    </div>

                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="contact_form">
                                <div id="message"></div>
                                <form id="contactform" className="row" name="contactform">
                                    <fieldset className="row-fluid">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" name="name" id="name" className="form-control" placeholder="John Doe" />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com" />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                                        </div>

                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <textarea className="form-control" id="message" name="text" rows="6" placeholder="Your Message ..."></textarea>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                                            <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Submit</button>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-offset-1 col-sm-10 col-md-10 col-sm-offset-1 pd-add">
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="icon icon-location2"></i>
                                </div>
                                <h3>Headquarters</h3>
                                <p>PO Box 16122 Nairobi
                                    <br /> Kanaja Building Juja</p>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <h3>Email Us</h3>
                                <p>info@uptechpay.com
                                    <br />support@uptechpay.com</p>
                            </div>
                            <div className="address-item">
                                <div className="address-icon">
                                    <i className="icon icon-headphones"></i>
                                </div>
                                <h3>Call Us</h3>
                                <p>+254745865323 / +254716060198 / +254705984772</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default contact
