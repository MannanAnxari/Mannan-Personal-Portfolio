import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { LoginButton } from "./../login/Button";

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
        <li>
          <LoginButton />
        </li>
      </ul>
      <div className="footerSocial">
        <a className="view" href="//www.facebook.com/profile.php?id=100014396160448" target={"_blank"}>
          <FaFacebookF />
        </a>
        <a className="view" href="//instagram.com/themannananxari" target={"_blank"}>
          <FiInstagram />
        </a>
        <a className="view" href="//twitter.com/mannananxari" target={"_blank"}>
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footerCopyrights">
        <small>&copy; MANNAN. All Rights Reserved.</small>
      </div>
    </footer>
  );
};
