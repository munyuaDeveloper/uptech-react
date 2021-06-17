import React from 'react'
import AboutSection from './AboutSection'
import HeroSectionSlider from './HeroSectionSlider'
import ProjectAndClients from './ProjectAndClients'
import ServicesSection from './ServicesSection'
import NavbarSlider from "../NavbarSlider";
import {BrowserRouter as Router} from "react-router-dom";

function Home() {
    return (
        <div>
            <NavbarSlider activePage="Home" />

            <AboutSection />

            <ProjectAndClients/> 

            <ServicesSection />
        </div>
    )
}

export default Home
