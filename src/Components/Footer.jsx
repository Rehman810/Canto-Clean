import React from 'react';
import '../css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src="https://img.freepik.com/premium-vector/cleaning-service_609550-333.jpg?w=740" style={{ width: '150px' }} alt="Logo" />
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: cantoclean@yahoo.com</li>
            <li>Phone: +1 267-518-8169</li>
            <li>Address: Scranton, PA, US · Hazleton, PA, US · Wilkes-Barre, PA, US · Hazle Township, Luzerne County, PA, US</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Canto Clean LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
