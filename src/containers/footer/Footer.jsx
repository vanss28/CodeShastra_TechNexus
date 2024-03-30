import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>JOIN NOW</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <p>Powered By CodShastra, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          
          <p>Social Media- Tech Nexus </p>
          
          <p>Contact Us - 9833085016</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Tech Nexus </h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>DJSCE College</p>
          <p>022-26208485</p>
          <p>info@technexus.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>&copy; 2023 NexBot All rights reserved by TechNexus.</p>
      </div>
    </div>
  );
};

export default Footer;

