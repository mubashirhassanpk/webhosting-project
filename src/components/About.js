import React from 'react';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About WebHostingPK</h2>
            <p>
              WebHostingPK has been providing reliable web hosting services in Pakistan since 2010. 
              We are committed to delivering high-quality hosting solutions with exceptional customer 
              service and technical support.
            </p>
            <p>
              Our state-of-the-art data centers, powered by cutting-edge technology, ensure maximum 
              uptime and optimal performance for your websites. Whether you're running a personal blog, 
              business website, or e-commerce store, we have the perfect hosting solution for you.
            </p>
            <p>
              With over 10,000 satisfied customers and a track record of excellence, WebHostingPK 
              continues to be the preferred choice for web hosting in Pakistan.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div>Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div>Uptime Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">13+</div>
              <div>Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div>Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;