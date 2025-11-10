import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WebHostingPK</h3>
            <p>
              Your trusted partner for reliable web hosting solutions in Pakistan. 
              We provide fast, secure, and affordable hosting services with 24/7 support.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Shared Hosting</a></li>
              <li><a href="#">Cloud Hosting</a></li>
              <li><a href="#">VPS Hosting</a></li>
              <li><a href="#">Dedicated Servers</a></li>
              <li><a href="#">SSL Certificates</a></li>
              <li><a href="#">Domain Registration</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Knowledge Base</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Server Status</a></li>
              <li><a href="#">Migration Services</a></li>
              <li><a href="#">Billing</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">News & Updates</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 WebHostingPK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;