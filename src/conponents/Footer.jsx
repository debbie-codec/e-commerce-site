import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <h3 className="newsletter-title">Stay Updated</h3>
          <p className="newsletter-subtitle">
            Get exclusive offers, new arrivals, and style tips delivered to your inbox.
          </p>
          <form
            className="newsletter-form"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <p className="subscription-success">
              ✓ Thanks for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        {/* Column 1: Brand Info */}
        <div className="footer-column">
          <h4 className="footer-column-title">LUX Clothings</h4>
          <p className="footer-description">
            Elevate your style with our curated collection of luxury fashion pieces. 
            Timeless elegance meets contemporary flair.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-icon">
              <FiInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <FiTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <FiFacebook />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* Column 2: Shop */}
        <div className="footer-column">
          <h4 className="footer-column-title">Shop</h4>
          <ul className="footer-links">
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/best-sellers">Best Sellers</Link>
            </li>
            <li>
              <Link to="/sale">Sale</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/shop">All Products</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Service */}
        <div className="footer-column">
          <h4 className="footer-column-title">Customer Service</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Shipping Info</Link>
            </li>
            <li>
              <Link to="/">Returns & Exchanges</Link>
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-column">
          <h4 className="footer-column-title">Contact</h4>
          <div className="contact-info">
            <p className="contact-item">
              <FiMapPin className="contact-icon" />
              Lagos, Nigeria
            </p>
            <p className="contact-item">
              <FiPhone className="contact-icon" />
              +234 (0) 123 456 7890
            </p>
            <p className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:hello@luxclothings.com">
                hello@luxclothings.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2024 LUX Clothings. All rights reserved.
        </p>
        <div className="footer-bottom-links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;