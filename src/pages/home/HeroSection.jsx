import React from 'react'

export const HeroSection = () => {
  return (
    <section id="heroSection" className='hero--section'>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className='section--title'>Hey, I'm Thamu P</p>
          <h1 className='hero--section--title'>
            <span className="hero--section--title-color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-despcription">
          I craft robust and scalable web applications from front to back.  
          With a passion for clean code and modern design, I bring ideas to life  
          using technologies like React.js, Node.js, Express, and MongoDB.  
          Let’s build something amazing together!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  )
}
