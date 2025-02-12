import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <a href="/">
        <img  src="images/mainlogo.png" alt="sr designres Logo" className="contact-logo" />
        </a>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Feel free to reach out to us through any of the channels below!</p>
      </header>
      {/* Contact Information Cards */}
      <div className="contact-cards">
        <div className="contact-card">  
          <FaMapMarkerAlt className="contact-icon"/>
          <h3 className="contact-heading-content">Our Address</h3>
          <p> sr designres</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon"/>
          <h3 className="contact-heading-content">Email Us</h3>
          <p>srtechcreaters@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaPhone className="contact-icon"/> 
          <h3 className="contact-heading-content">Call Us</h3>
          <p>9642909195</p>
          <p>7730020465</p>
        </div>
      </div>
      {/* More In
      fo Section */}
      <div className="more-info">
        <h2>More Information</h2>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/career">Career</a></li>
        </ul>
      </div>
      {/* Social Media Section */}
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
