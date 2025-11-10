import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-clock',
      title: '99.9% Uptime',
      description: 'We guarantee 99.9% uptime with our reliable hosting infrastructure.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Fast Loading',
      description: 'SSD storage and optimized servers ensure your website loads quickly.'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock technical support to help you whenever you need it.'
    },
    {
      icon: 'fas fa-backup',
      title: 'Daily Backups',
      description: 'Automatic daily backups to keep your data safe and secure.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Security',
      description: 'Advanced security measures to protect your website from threats.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Control Panel',
      description: 'Easy-to-use control panel to manage your hosting account.'
    },
    {
      icon: 'fas fa-credit-card',
      title: 'Money Back Guarantee',
      description: '30-day money back guarantee if you are not satisfied.'
    },
    {
      icon: 'fas fa-users',
      title: 'One-Click Install',
      description: 'Install WordPress, Joomla, and other CMS with just one click.'
    }
  ];

  return (
    <section className="section features">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Why Choose WebHostingPK?</h2>
          <p>We provide the best hosting features to ensure your website's success</p>
        </div>
        
        <div className="grid grid-4">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;