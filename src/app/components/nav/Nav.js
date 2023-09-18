import React from "react";
import { BiHomeAlt, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiUser6Line, RiServiceLine } from "react-icons/ri";

import nav from "./nav.module.css";

export const Nav = () => {
  const location = window.location.hash || "#";

  return (
    <nav className={nav.nav}>
      <a href="#" className={`${location === "#" && nav.active} ${nav.nav_link}`}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        className={`${location === "#about" && nav.active} ${nav.nav_link}`}
      >
        <RiUser6Line />
      </a>
      <a
        href="#experience"
        className={`${location === "#experience" && nav.active} ${nav.nav_link}`}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={`${location === "#services" && nav.active} ${nav.nav_link}`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`${location === "#contact" && nav.active} ${nav.nav_link}`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
