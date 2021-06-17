import React from 'react'
import Breadcrumb from '../Breadcrumb'
import AboutSection from '../home/AboutSection'
import NavbarSlider from "../NavbarSlider";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../Header";
import HeroSlider from "hero-slider";

function AboutUs() {
    return (
        <>
            <Header activePage="About" />
            <Breadcrumb currentPage='About Us'/>

            <AboutSection/>

            <section id="team" className="pb-5">
                <div className="container">
                    <h5 className="section-title h1">OUR TEAM</h5>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip">
                                <div className="mainflip flip-0">
                                    <div className="frontside">
                                        <div className="card ">
                                            <div className="card-body text-center">
                                                <p><img className="img-fluid" src="{{asset('home2/uploads/brayo.jpg')}}"
                                                        alt="card image"/></p>
                                                <h4 className="card-title">Brian Orato</h4>
                                                <p className="card-text">Founder, Backend Developer </p>
                                                <a href="https://www.fiverr.com/share/qb8D02"
                                                   className="btn btn-primary btn-sm"><i className="fa fa-plus"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Brian Orato</h4>
                                                <p className="card-text">Highly motivated Software Engineer with strong
                                                    Software engineering and team-work skills, attention to detail,
                                                    strong
                                                    passion for technology and a solid Software Development and
                                                    Engineering background.Backend Technologies: Python, PHP, Node
                                                    JS</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://www.linkedin.com/in/brian-mokandu-3a8050118/">
                                                            <i className="fa fa-linkedin"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://github.com/brianbrix/">
                                                            <i className="fa fa-github"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://wa.me/254745865323?">
                                                            <i className="fa fa-whatsapp"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="http://brianmokandu.tech/">
                                                            <i className="fa fa-globe"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid"
                                                        src="{{asset('home2/uploads/davi1.jpg')}}" alt="card image"/>
                                                </p>
                                                <h4 className="card-title">David Njau</h4>
                                                <p className="card-text">Founder, Mobile Developer </p>
                                                <a href="https://www.fiverr.com/share/qb8D02"
                                                   className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">David Njau</h4>
                                                <p className="card-text">Analytical and detail oriented
                                                    Android developer offering
                                                    more than four years of
                                                    working in the android
                                                    development bringing forth
                                                    years of experience of building,
                                                    integrating, testing and
                                                    supporting Android
                                                    applications.</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://www.linkedin.com/in/david-njau-2638b617a/">
                                                            <i className="fa fa-linkedin"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://github.com/davidnjau">
                                                            <i className="fa fa-github"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://wa.me/254716060198?">
                                                            <i className="fa fa-whatsapp"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="#">
                                                            <i className="fa fa-globe"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid"
                                                        src="{{asset('home2/uploads/peter.png')}}" alt="card image"/>
                                                </p>
                                                <h4 className="card-title">Peter Munyua</h4>
                                                <p className="card-text">Founder, Frontend Developer </p>
                                                <a href="https://www.fiverr.com/share/qb8D02"
                                                   className="btn btn-primary btn-sm"><i className="fa fa-plus"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Peter Munyua</h4>
                                                <p className="card-text">I am a Software developer with 4+ years
                                                    experience building
                                                    websites and web applications. I specialize in Angular and React and
                                                    have
                                                    professional experience working with Django and Ionic for Hybrid
                                                    mobile apps.
                                                </p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://www.linkedin.com/in/peter-munyua">
                                                            <i className="fa fa-linkedin"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://www.gitshowcase.com/munyuaDeveloper">
                                                            <i className="fa fa-github"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="https://wa.me/254705984772?">
                                                            <i className="fa fa-whatsapp"/>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank"
                                                           href="http://munyua.pythonanywhere.com">
                                                            <i className="fa fa-globe"/>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
