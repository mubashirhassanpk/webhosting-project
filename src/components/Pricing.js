import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₨999',
      period: '/month',
      featured: false,
      features: [
        '1 Website',
        '5GB SSD Storage',
        '50GB Bandwidth',
        'Free SSL Certificate',
        'Email Accounts',
        'cPanel Access',
        'WordPress Support',
        '24/7 Support'
      ]
    },
    {
      name: 'Premium',
      price: '₨1,999',
      period: '/month',
      featured: true,
      badge: 'Most Popular',
      features: [
        '5 Websites',
        '25GB SSD Storage',
        '250GB Bandwidth',
        'Free SSL Certificate',
        'Unlimited Email Accounts',
        'cPanel Access',
        'WordPress Support',
        'Daily Backups',
        'Free Domain (1 Year)',
        '24/7 Priority Support'
      ]
    },
    {
      name: 'Business',
      price: '₨3,999',
      period: '/month',
      featured: false,
      features: [
        'Unlimited Websites',
        '100GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        'Unlimited Email Accounts',
        'cPanel Access',
        'WordPress Support',
        'Daily Backups',
        'Free Domain (1 Year)',
        'Advanced Security',
        'CDN Integration',
        '24/7 Priority Support'
      ]
    }
  ];

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="text-center mb-4">
          <h2>Choose Your Hosting Plan</h2>
          <p>Select the perfect plan for your website needs and budget</p>
        </div>
        
        <div className="grid grid-3">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                <span className="price-period">{plan.period}</span>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="btn btn-primary">Get Started</a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <p>All plans include 30-day money back guarantee and 99.9% uptime SLA</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;