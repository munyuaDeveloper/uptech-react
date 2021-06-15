import React from 'react'
import AboutSection from './AboutSection'
import HeroSectionSlider from './HeroSectionSlider'
import ProjectAndClients from './ProjectAndClients'
import ServicesSection from './ServicesSection'

function Home() {
    return (
        <div>
           <HeroSectionSlider />

            <AboutSection />

            <ProjectAndClients/> 

            <ServicesSection />
        </div>
    )
}

export default Home
