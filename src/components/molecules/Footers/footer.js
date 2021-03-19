import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-banner">
      <div className="footer-tabs">
        <a href="#">Home</a>
        <a>|</a>
        <a href="#">Terms and Conditions</a>
        <a>|</a>
        <a href="#">Privacy Policy</a>
        <a>|</a>
        <a href="#">Collection Statement</a>
        <a>|</a>
        <a href="#">Help</a>
        <a>|</a>
        <a href="#">Manage Account</a>
      </div>
      <p>Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
      <div className="base-social">
        <div className="svg-social">
          <a href="#">
            <img src="/images/facebook.svg" />
          </a>
          <a href="#">
            <img src="/images/instagram.svg" />
          </a>
          <a href="#">
            <img src="/images/twitter.svg" />
          </a>
        </div>
        <div className="storesvg">
          <a href="#">
            <img src="/images/playstore.svg" />
          </a>
          <a href="#">
            <img src="/images/appstore.svg" />
          </a>
          <a href="#">
            <img src="/images/windowsstore.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
