import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footerLogo">
        MANNAN
      </a>
      <ul className="permaLinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footerSocial">
        <a className="view" href="//facebook.com/" target={"_blank"}>
          <FaFacebookF />
        </a>
        <a className="view" href="//instagram.com/" target={"_blank"}>
          <FiInstagram />
        </a>
        <a className="view" href="//twitter.com/" target={"_blank"}>
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footerCopyrights">
        <small>&copy; MANNAN. All Rights Reserved.</small>
      </div>
    </footer>
  );
};
