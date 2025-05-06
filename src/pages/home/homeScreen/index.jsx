import { HeroSection } from "../HeroSection";

import React from 'react'
import { MySkills } from "../MySkills";
import { AboutMe } from "../aboutMe";
import { MyPortfolio } from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export const Home = () => {
  return (
    <>
        <HeroSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <Testimonial />
        <ContactMe />
        <Footer />
    </>
  )
}
