import React from 'react'
import AboutSection from './AboutSection'
import ProjectAndClients from './ProjectAndClients'
import NavbarSlider from "../NavbarSlider";
import Service from "../services/Service";

function Home() {
    return (
        <div>
            <NavbarSlider activePage="Home" />

            <AboutSection />

            <ProjectAndClients/> 

            <Service />
        </div>
    )
}

export default Home
