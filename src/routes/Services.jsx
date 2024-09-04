import React from 'react';
import '../assets/styles/Services.css';

const Services = () => {
  return (
      <div className="services-container">
        <h2>Services</h2>

        <div className="services-list">
          <div className="service-item">
            {/* <img src="#" alt="Web Design" /> */}
            <h3>Web Design</h3>
            <p>
              I craft visually appealing and user-friendly websites that are optimized for performance and responsiveness across all devices.
            </p>
            <ul>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
              <li>Prototyping</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="service-item">
            {/* <img src="#" alt="Custom website" /> */}
            <h3>Customizable Websites</h3>
            <p>
              Get a website tailored to your unique needs and brand identity. I offer flexible solutions that can be customized to grow with your business.
            </p>
            <ul>
              <li>Brand Identity Integration</li>
              <li>Custom Layouts</li>
              <li>Scalable Solutions</li>
              <li>Ongoing Support</li>
            </ul>
          </div>

          <div className="service-item">
            {/* <img src="#" alt="E-commerce Solutions" /> */}
            <h3>E-commerce Solutions</h3>
            <p>
              Build a robust online store with features like product management, payment gateways, and seamless user experience to drive sales and customer satisfaction.
            </p>
            <ul>
              <li>Product Management</li>
              <li>Secure Payment Gateways</li>
              <li>Order and Inventory Management</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          <div className="service-item">
            {/* <img src="#" alt="Website Maintenance" /> */}
            <h3>Website Maintenance & Updates</h3>
            <p>
              Keep your website running smoothly with regular maintenance, updates, and security checks. Ensure your site remains fast, secure, and up-to-date.
            </p>
            <ul>
              <li>Regular Backups</li>
              <li>Security Updates</li>
              <li>Performance Optimization</li>
              <li>Content Updates</li>
            </ul>
          </div>

          <div className="service-item">
            {/* <img src="#" alt="SEO Services" /> */}
            <h3>SEO Services</h3>
            <p>
              Improve your website's visibility on search engines with comprehensive SEO strategies. Drive more traffic and increase your online presence.
            </p>
            <ul>
              <li>Keyword Research</li>
              <li>On-page SEO</li>
              <li>Link Building</li>
              <li>Analytics and Reporting</li>
            </ul>
          </div>
        </div>
      </div>

  );
};

export default Services;