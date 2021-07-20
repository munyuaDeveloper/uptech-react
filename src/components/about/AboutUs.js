import React from 'react'
import Breadcrumb from '../Breadcrumb'
import AboutSection from '../home/AboutSection'
import NavbarSlider from "../NavbarSlider";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";
import './about.css'

import peter from '../../uploads/peter.jpeg';
import brayo from '../../uploads/brayo.jpg';
import davi from '../../uploads/davi2.jpg';

function AboutUs() {
    return (
        <>
            <Header activePage="About" />
            <Breadcrumb currentPage='About Us' />

            <AboutSection />



            <div className="team4">
                <div className="container our_team_section">
                    <div className="row justify-content-center mb-4">
                        <div className="col-12 text-center">
                            <h1 className="mb-3 team_section_title">Experienced & Professional Team</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 mb-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={peter} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 personal_info">
                                    <div className="pt-4">
                                        <h5 className="mt-4 text-bold">Peter Munyua</h5>
                                        <h6 className="subtitle mb-3">Co-Founder &</h6>
                                        <h6 className="subtitle mb-3">Front-end Engineer</h6>
                                    </div>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://www.linkedin.com/in/peter-munyua">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://www.gitshowcase.com/munyuaDeveloper">
                                                <i className="fa fa-github" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://wa.me/254705984772?">
                                                <i className="fa fa-whatsapp" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="http://munyua.tech">
                                                <i className="fa fa-globe" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={brayo} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 personal_info">
                                    <div className="pt-4">
                                        <h5 className="mt-4 text-bold">Brian Mokandu</h5>
                                        <h6 className="subtitle mb-3">Co-Founder &</h6>
                                        <h6 className="subtitle mb-3">Back-end Engineer</h6>
                                    </div>
                                    <ul className="list-inline text-center">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://www.linkedin.com/in/brian-mokandu-3a8050118/">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://github.com/brianbrix/">
                                                <i className="fa fa-github" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://wa.me/254745865323?">
                                                <i className="fa fa-whatsapp" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="http://brianmokandu.tech/">
                                                <i className="fa fa-globe" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={davi} alt="wrapkit" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-12 personal_info">
                                    <div className="pt-4">
                                        <h5 className="mt-4 text-bold">David Njau</h5>
                                        <h6 className="subtitle mb-3">Co-Founder &</h6>
                                        <h6 className="subtitle mb-3">Mobile Developer</h6>
                                    </div>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://www.linkedin.com/in/david-njau-2638b617a/">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://github.com/davidnjau">
                                                <i className="fa fa-github" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank"
                                                href="https://wa.me/254716060198?">
                                                <i className="fa fa-whatsapp" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                <i className="fa fa-globe" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
