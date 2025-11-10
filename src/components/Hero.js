import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1>Reliable Web Hosting in Pakistan</h1>
        <p>
          Get fast, secure, and affordable web hosting solutions with 99.9% uptime guarantee. 
          Perfect for businesses, blogs, and e-commerce websites.
        </p>
        <div className="hero-buttons">
          <a href="#pricing" className="btn btn-secondary">View Plans</a>
          <a href="#contact" className="btn btn-outline">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;