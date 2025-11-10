import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-server',
      title: 'Shared Hosting',
      description: 'Perfect for small websites and blogs. Affordable hosting with all essential features.'
    },
    {
      icon: 'fas fa-cloud',
      title: 'Cloud Hosting',
      description: 'Scalable cloud hosting with high performance and reliability for growing businesses.'
    },
    {
      icon: 'fas fa-desktop',
      title: 'VPS Hosting',
      description: 'Virtual private servers with dedicated resources and full root access.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'SSL Certificates',
      description: 'Secure your website with SSL certificates and protect customer data.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Domain Registration',
      description: 'Register your domain name with competitive prices and easy management.'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Hosting',
      description: 'Professional email hosting with your domain name and spam protection.'
    }
  ];

  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Our Hosting Services</h2>
          <p>Choose from our wide range of hosting solutions designed to meet your needs</p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#pricing" className="btn btn-primary mt-4">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;